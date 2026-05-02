import { useLocation, useNavigate } from 'react-router';
import { Header } from '../components/Header';
import { ArrowLeft, Copy, RefreshCw, Send, Check, Link as LinkIcon, Calendar, User, Building2 } from 'lucide-react';
import { useState } from 'react';
import { ModelRequest } from '../data/models';

export function GenerateEndpointPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const request = location.state?.request as ModelRequest | undefined;

  const [endpointUrl, setEndpointUrl] = useState(
    `https://api.medicalai.com/v1/models/${request?.modelId || 'xxx'}/endpoint/${generateRandomToken()}`
  );
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [expirationDays, setExpirationDays] = useState(30);

  function generateRandomToken(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(endpointUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRefresh = () => {
    const newToken = generateRandomToken();
    setEndpointUrl(`https://api.medicalai.com/v1/models/${request?.modelId || 'xxx'}/endpoint/${newToken}`);
  };

  const handleSend = () => {
    setSent(true);
    setTimeout(() => {
      navigate('/developer/models');
    }, 2000);
  };

  if (!request) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-foreground mb-2">No Request Data</h1>
          <button onClick={() => navigate('/developer/models')} className="text-primary hover:underline">
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/developer/models')}
          className="inline-flex items-center gap-2 mb-6 text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="size-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Dashboard</span>
        </button>

        {/* Success Message */}
        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-emerald-500/10 rounded-xl shrink-0">
              <Check className="size-6 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2">Request Approved!</h2>
              <p className="text-sm text-muted-foreground">
                You've approved access for <span className="font-medium text-foreground">{request.requesterName}</span> from{' '}
                <span className="font-medium text-foreground">{request.requesterOrganization}</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="p-8 border-b border-border bg-secondary/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <LinkIcon className="size-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-foreground">Generate API Endpoint</h1>
                <p className="text-sm text-muted-foreground mt-1">
                  Configure and share secure access to {request.modelName}
                </p>
              </div>
            </div>
          </div>

          {/* Requester Summary */}
          <div className="p-8 border-b border-border bg-background/50">
            <h3 className="text-sm font-semibold text-foreground mb-4">Approved For</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <User className="size-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Requester</p>
                  <p className="text-sm font-medium text-foreground">{request.requesterName}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Building2 className="size-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Organization</p>
                  <p className="text-sm font-medium text-foreground">{request.requesterOrganization}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="size-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Duration</p>
                  <p className="text-sm font-medium text-foreground">{request.duration}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Endpoint URL */}
          <div className="p-8 space-y-6">
            <div>
              <label className="text-sm font-semibold text-foreground mb-3 block">
                API Endpoint URL
              </label>
              <div className="flex items-center gap-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={endpointUrl}
                    readOnly
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm font-mono text-foreground pr-12"
                  />
                  <button
                    onClick={handleCopy}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-secondary rounded-lg transition-colors"
                    title="Copy to clipboard"
                  >
                    {copied ? (
                      <Check className="size-4 text-emerald-600" />
                    ) : (
                      <Copy className="size-4 text-muted-foreground" />
                    )}
                  </button>
                </div>
                <button
                  onClick={handleRefresh}
                  className="px-4 py-3 bg-secondary border border-border rounded-xl hover:bg-secondary/80 transition-colors flex items-center gap-2"
                  title="Regenerate endpoint"
                >
                  <RefreshCw className="size-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-foreground">Regenerate</span>
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                This unique endpoint URL will provide secure access to your model's API
              </p>
            </div>

            {/* Expiration Settings */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-3 block">
                Link Expiration
              </label>
              <div className="grid grid-cols-4 gap-3">
                {[7, 30, 90, 365].map((days) => (
                  <button
                    key={days}
                    onClick={() => setExpirationDays(days)}
                    className={`px-4 py-3 rounded-xl border font-medium text-sm transition-all ${
                      expirationDays === days
                        ? 'bg-primary/10 border-primary/30 text-primary'
                        : 'bg-background border-border text-foreground hover:border-primary/30'
                    }`}
                  >
                    {days} days
                  </button>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                The endpoint will expire on{' '}
                <span className="font-medium text-foreground">
                  {new Date(Date.now() + expirationDays * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </p>
            </div>

            {/* API Documentation Preview */}
            <div className="bg-background border border-border rounded-xl p-5">
              <h4 className="text-sm font-semibold text-foreground mb-3">Quick Start Example</h4>
              <pre className="bg-muted/20 rounded-lg p-4 text-xs font-mono text-foreground overflow-x-auto">
{`curl -X POST "${endpointUrl}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "image": "base64_encoded_image_data",
    "parameters": {
      "threshold": 0.5
    }
  }'`}
              </pre>
            </div>
          </div>

          {/* Actions */}
          <div className="p-8 border-t border-border bg-secondary/20">
            <div className="flex items-center gap-3">
              <button
                onClick={handleSend}
                disabled={sent}
                className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sent ? (
                  <>
                    <Check className="size-5" />
                    Sent to {request.requesterName}
                  </>
                ) : (
                  <>
                    <Send className="size-5" />
                    Send Endpoint to Requester
                  </>
                )}
              </button>
              <button
                onClick={() => navigate('/developer/models')}
                className="px-6 py-3 bg-background border border-border rounded-xl font-medium hover:bg-secondary transition-all"
              >
                Done
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-3 text-center">
              The endpoint URL and documentation will be sent to {request.requesterEmail}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
