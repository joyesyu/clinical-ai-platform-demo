import React, { useState, useMemo } from 'react';
import { useNavigate, Link } from 'react-router';
import { PathologistHeader, DEVELOPER_TABS, DEVELOPER_HOME_ROUTE } from '../components/pathologist/PathologistHeader';
import { Search, ChevronUp, ChevronDown, ArrowUpRight } from 'lucide-react';
import { jobs, Job } from '../data/jobs';
import { modelRequests } from '../data/models';

type FilterType = 'model' | 'projectId' | 'jobId' | 'user';
type TabType = 'all' | 'failed' | 'running' | 'completed';
type SortCol = 'started' | 'duration';
type SortDir = 'asc' | 'desc';

function parseDurationToSeconds(duration: string): number {
  const minMatch = duration.match(/([\d.]+)\s*min/);
  if (minMatch) return parseFloat(minMatch[1]) * 60;
  const secMatch = duration.match(/([\d.]+)\s*s/);
  if (secMatch) return parseFloat(secMatch[1]);
  return 0;
}

const STATUS_BADGE: Record<Job['status'], { bg: string; color: string; label: string }> = {
  failed: { bg: '#ffeded', color: '#dc1111', label: 'FAILED' },
  running: { bg: 'rgba(208, 231, 255, 0.6)', color: '#003a8c', label: 'RUNNING' },
  completed: { bg: 'rgba(217, 247, 190, 0.6)', color: '#135200', label: 'COMPLETED' },
};

const filterTypeLabels: Record<FilterType, string> = {
  model: 'Model',
  projectId: 'Project ID',
  jobId: 'Job ID',
  user: 'User',
};

const TABS: { key: TabType; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'failed', label: 'Failed' },
  { key: 'running', label: 'Running' },
  { key: 'completed', label: 'Completed' },
];

export function JobsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [filterType, setFilterType] = useState<FilterType>('model');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [timeFilter, setTimeFilter] = useState('7');
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [sortCol, setSortCol] = useState<SortCol>('started');
  const [sortDir, setSortDir] = useState<SortDir>('desc');

  const handleSort = (col: SortCol) => {
    if (sortCol === col) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortCol(col);
      setSortDir('desc');
    }
  };

  const filteredJobs = useMemo(() => {
    let filtered = activeTab === 'all' ? [...jobs] : jobs.filter((j) => j.status === activeTab);

    if (searchKeyword.trim()) {
      const kw = searchKeyword.toLowerCase();
      filtered = filtered.filter((job) => {
        switch (filterType) {
          case 'model': return job.modelName.toLowerCase().includes(kw);
          case 'projectId': return job.projectId.toLowerCase().includes(kw);
          case 'jobId': return job.id.toLowerCase().includes(kw);
          case 'user': return job.user.toLowerCase().includes(kw);
          default: return true;
        }
      });
    }

    filtered.sort((a, b) => {
      let cmp = 0;
      if (sortCol === 'started') {
        cmp = a.started.localeCompare(b.started);
      } else if (sortCol === 'duration') {
        cmp = parseDurationToSeconds(a.duration) - parseDurationToSeconds(b.duration);
      }
      return sortDir === 'asc' ? cmp : -cmp;
    });

    return filtered;
  }, [activeTab, searchKeyword, filterType, sortCol, sortDir]);

  const pendingRequestsCount = modelRequests.filter((r) => r.status === 'pending').length;

  const SortIcon = ({ col }: { col: SortCol }) => {
    if (sortCol !== col) {
      return (
        <span style={{ display: 'inline-flex', flexDirection: 'column', marginLeft: '4px', opacity: 0.4 }}>
          <ChevronUp style={{ width: '10px', height: '10px', marginBottom: '-3px' }} />
          <ChevronDown style={{ width: '10px', height: '10px' }} />
        </span>
      );
    }
    return sortDir === 'asc'
      ? <ChevronUp style={{ width: '12px', height: '12px', marginLeft: '4px', color: '#1890ff' }} />
      : <ChevronDown style={{ width: '12px', height: '12px', marginLeft: '4px', color: '#1890ff' }} />;
  };

  return (
    <div className="min-h-screen" style={{ background: '#ffffff' }}>
      <PathologistHeader tabs={DEVELOPER_TABS} homeRoute={DEVELOPER_HOME_ROUTE} onNotificationsClick={() => navigate('/developer/models')} />

      <main style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        {/* Page Title */}
        <div style={{ marginTop: '32px', marginBottom: '32px' }}>
          <h1
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 500,
              fontSize: '24px',
              lineHeight: '32px',
              color: '#000000',
              margin: 0,
            }}
          >
            Jobs
          </h1>
        </div>

        {/* Tabs + Filter Bar Row */}
        <div className="flex items-center" style={{ marginBottom: '16px', gap: '0', justifyContent: 'space-between' }}>
          {/* Tabs */}
          <div
            className="flex items-center"
            style={{
              background: '#f0f0f0',
              borderRadius: '6px',
              padding: '3px',
              gap: '2px',
              marginRight: '24px',
              flexShrink: 0,
            }}
          >
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                style={{
                  height: '28px',
                  paddingLeft: '16px',
                  paddingRight: '16px',
                  borderRadius: '4px',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'Roboto, sans-serif',
                  fontWeight: activeTab === tab.key ? 600 : 400,
                  fontSize: '14px',
                  lineHeight: '22px',
                  color: activeTab === tab.key ? '#096DD9' : '#595959',
                  background: activeTab === tab.key ? '#ffffff' : 'transparent',
                  boxShadow: activeTab === tab.key ? '0px 1px 4px rgba(0, 0, 0, 0.15)' : 'none',
                  transition: 'all 0.15s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                {tab.label}
                {tab.key !== 'all' && (
                  <span
                    style={{
                      marginLeft: '6px',
                      fontSize: '12px',
                      lineHeight: '20px',
                      color: activeTab === tab.key ? '#096DD9' : '#8c8c8c',
                    }}
                  >
                    ({jobs.filter((j) => j.status === tab.key).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Filter Bar (right-aligned) */}
          <div className="flex items-center" style={{ gap: '8px', flexShrink: 0 }}>
            {/* Filter Type Dropdown + Search (joined) */}
            <div className="flex relative">
              <div className="relative">
                <button
                  onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
                  className="flex items-center justify-between bg-white"
                  style={{
                    height: '32px',
                    width: '130px',
                    paddingLeft: '12px',
                    paddingRight: '10px',
                    border: '1px solid rgba(111, 111, 111, 0.4)',
                    borderTopLeftRadius: '4px',
                    borderBottomLeftRadius: '4px',
                    borderRight: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Roboto, sans-serif',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '22px',
                      color: '#525252',
                    }}
                  >
                    {filterTypeLabels[filterType]}
                  </span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6L8 10L12 6" stroke="#161616" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {isFilterDropdownOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsFilterDropdownOpen(false)} />
                    <div
                      className="absolute left-0 z-20 bg-white"
                      style={{
                        top: 'calc(100% + 4px)',
                        width: '130px',
                        border: '1px solid rgba(111, 111, 111, 0.4)',
                        borderRadius: '4px',
                        boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.15)',
                      }}
                    >
                      {(Object.keys(filterTypeLabels) as FilterType[]).map((type) => (
                        <button
                          key={type}
                          onClick={() => {
                            setFilterType(type);
                            setSearchKeyword('');
                            setIsFilterDropdownOpen(false);
                          }}
                          className="w-full text-left"
                          style={{
                            paddingLeft: '12px',
                            paddingRight: '12px',
                            paddingTop: '7px',
                            paddingBottom: '7px',
                            fontFamily: 'Roboto, sans-serif',
                            fontSize: '14px',
                            color: filterType === type ? '#1890ff' : '#525252',
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                          }}
                        >
                          {filterTypeLabels[type]}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Search Input */}
              <div className="relative bg-white" style={{ width: '400px', height: '32px' }}>
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    border: '1px solid rgba(111, 111, 111, 0.4)',
                    borderTopRightRadius: '4px',
                    borderBottomRightRadius: '4px',
                    pointerEvents: 'none',
                  }}
                />
                <Search
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '8px',
                    width: '16px',
                    height: '16px',
                    color: 'rgba(111, 111, 111, 0.85)',
                  }}
                />
                <input
                  type="text"
                  placeholder="Filter jobs"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  className="placeholder-[rgba(111,111,111,0.85)]"
                  style={{
                    width: '100%',
                    height: '100%',
                    paddingLeft: '34px',
                    paddingRight: '12px',
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '14px',
                    color: '#525252',
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                  }}
                />
              </div>
            </div>

            {/* Last N Days */}
            <span
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '22px',
                color: '#525252',
                flexShrink: 0,
              }}
            >
              Last
            </span>
            <div className="bg-white" style={{ width: '72px', height: '32px', position: 'relative', flexShrink: 0 }}>
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  border: '1px solid rgba(111, 111, 111, 0.4)',
                  borderRadius: '4px',
                  pointerEvents: 'none',
                }}
              />
              <input
                type="text"
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value)}
                style={{
                  width: '100%',
                  height: '100%',
                  paddingLeft: '12px',
                  paddingRight: '12px',
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: '14px',
                  color: '#161616',
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                }}
              />
            </div>
            <span
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '22px',
                color: '#525252',
                flexShrink: 0,
              }}
            >
              Days
            </span>
          </div>
        </div>

        {/* Jobs Table */}
        <div
          style={{
            background: 'white',
            border: '1px solid #d9d9d9',
            borderRadius: '8px',
            overflow: 'hidden',
            marginBottom: '32px',
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
            <colgroup>
              <col style={{ width: '116px' }} />
              <col style={{ width: '220px' }} />
              <col style={{ width: '148px' }} />
              <col style={{ width: '176px' }} />
              <col style={{ width: '180px' }} />
              <col style={{ width: '180px' }} />
              <col style={{ width: '168px' }} />
              <col style={{ width: '160px' }} />
              <col style={{ width: '120px' }} />
              <col />
            </colgroup>
            <thead>
              <tr
                style={{
                  height: '40px',
                  background: '#f8f8f8',
                  borderBottom: '1px solid #e0e0e0',
                }}
              >
                {[
                  { label: 'Status', sortable: false },
                  { label: 'Model', sortable: false },
                  { label: 'Model Version', sortable: false },
                  { label: 'Job ID', sortable: false },
                  { label: 'Project ID', sortable: false },
                  { label: 'User', sortable: false },
                  { label: 'Institution', sortable: false },
                  { label: 'Started', sortable: true, col: 'started' as SortCol },
                  { label: 'Duration', sortable: true, col: 'duration' as SortCol },
                  { label: '', sortable: false },
                ].map((col) => (
                  <th
                    key={col.label}
                    onClick={col.sortable ? () => handleSort(col.col!) : undefined}
                    style={{
                      paddingLeft: '16px',
                      paddingRight: '8px',
                      fontFamily: 'Roboto, sans-serif',
                      fontWeight: 500,
                      fontSize: '12px',
                      lineHeight: '20px',
                      color: '#595959',
                      textAlign: 'left',
                      cursor: col.sortable ? 'pointer' : 'default',
                      userSelect: 'none',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span className="inline-flex items-center">
                      {col.label}
                      {col.sortable && <SortIcon col={col.col!} />}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredJobs.map((job, idx) => {
                const badge = STATUS_BADGE[job.status];
                const rowBg = idx % 2 === 0 ? '#ffffff' : '#fcfcfc';
                const isExpandable = job.status === 'failed' && job.isKnownBug;
                return (
                  <React.Fragment key={job.id}>
                  <tr
                    style={{
                      height: '52px',
                      background: rowBg,
                      borderBottom: isExpandable ? 'none' : '1px solid #f0f0f0',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = '#f5f8ff')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = rowBg)}
                  >
                    {/* Status */}
                    <td style={{ paddingLeft: '16px', paddingRight: '8px' }}>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: '22px',
                          paddingLeft: '8px',
                          paddingRight: '8px',
                          background: badge.bg,
                          borderRadius: '4px',
                          fontFamily: 'Roboto Mono, monospace',
                          fontWeight: 600,
                          fontSize: '11px',
                          lineHeight: '20px',
                          color: badge.color,
                          letterSpacing: '0.3px',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {badge.label}
                      </span>
                    </td>

                    {/* Model */}
                    <td style={{ paddingLeft: '16px', paddingRight: '8px' }}>
                      <Link
                        to={`/developer/model/${job.modelId}`}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center"
                        style={{
                          gap: '3px',
                          fontFamily: 'Roboto, sans-serif',
                          fontWeight: 400,
                          fontSize: '12px',
                          lineHeight: '20px',
                          color: 'rgba(22, 22, 22, 0.85)',
                          textDecoration: 'none',
                          maxWidth: '100%',
                          overflow: 'hidden',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                        onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                      >
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {job.modelName}
                        </span>
                        <ArrowUpRight style={{ width: '11px', height: '11px', flexShrink: 0, opacity: 0.6 }} />
                      </Link>
                    </td>

                    {/* Model Version */}
                    <td style={{ paddingLeft: '16px', paddingRight: '8px' }}>
                      <span
                        style={{
                          fontFamily: 'Roboto Mono, monospace',
                          fontWeight: 400,
                          fontSize: '12px',
                          lineHeight: '20px',
                          color: '#595959',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {job.modelVersion}
                      </span>
                    </td>

                    {/* Job ID */}
                    <td style={{ paddingLeft: '16px', paddingRight: '8px' }}>
                      <span
                        style={{
                          fontFamily: 'Roboto Mono, monospace',
                          fontWeight: 400,
                          fontSize: '12px',
                          lineHeight: '20px',
                          color: '#262626',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {job.id}
                      </span>
                    </td>

                    {/* Project ID */}
                    <td style={{ paddingLeft: '16px', paddingRight: '8px' }}>
                      <span
                        style={{
                          fontFamily: 'Roboto, sans-serif',
                          fontWeight: 400,
                          fontSize: '12px',
                          lineHeight: '20px',
                          color: '#262626',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: 'block',
                        }}
                      >
                        {job.projectId}
                      </span>
                    </td>

                    {/* User */}
                    <td style={{ paddingLeft: '16px', paddingRight: '8px' }}>
                      <span
                        style={{
                          fontFamily: 'Roboto, sans-serif',
                          fontWeight: 400,
                          fontSize: '12px',
                          lineHeight: '20px',
                          color: '#262626',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: 'block',
                        }}
                      >
                        {job.user}
                      </span>
                    </td>

                    {/* Institution */}
                    <td style={{ paddingLeft: '16px', paddingRight: '8px' }}>
                      <span
                        style={{
                          fontFamily: 'Roboto, sans-serif',
                          fontWeight: 400,
                          fontSize: '12px',
                          lineHeight: '20px',
                          color: '#595959',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: 'block',
                        }}
                      >
                        {job.institution}
                      </span>
                    </td>

                    {/* Started */}
                    <td style={{ paddingLeft: '16px', paddingRight: '8px' }}>
                      <span
                        style={{
                          fontFamily: 'Roboto, sans-serif',
                          fontWeight: 400,
                          fontSize: '12px',
                          lineHeight: '20px',
                          color: '#262626',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {job.started}
                      </span>
                    </td>

                    {/* Duration */}
                    <td style={{ paddingLeft: '16px', paddingRight: '8px' }}>
                      <span
                        style={{
                          fontFamily: 'Roboto, sans-serif',
                          fontWeight: 400,
                          fontSize: '12px',
                          lineHeight: '20px',
                          color: '#262626',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {job.duration}
                      </span>
                    </td>

                    {/* View Raw Log */}
                    <td style={{ paddingLeft: '8px', paddingRight: '16px', textAlign: 'right' }}>
                      <button
                        style={{
                          fontFamily: 'Roboto, sans-serif',
                          fontWeight: 400,
                          fontSize: '12px',
                          lineHeight: '20px',
                          color: '#096DD9',
                          textDecoration: 'none',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          padding: 0,
                          whiteSpace: 'nowrap',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                        onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                      >
                        View Raw Log
                      </button>
                    </td>
                  </tr>
                  {isExpandable && (
                    <tr
                      key={`${job.id}-notes`}
                      style={{ background: rowBg, borderBottom: '1px solid #f0f0f0' }}
                    >
                      <td colSpan={10} style={{ paddingLeft: '132px', paddingRight: '24px', paddingTop: '10px', paddingBottom: '12px' }}>
                        <div className="flex items-center" style={{ gap: '10px' }}>
                          <div
                            style={{
                              display: 'inline-flex',
                              height: '22px',
                              borderRadius: '4px',
                              overflow: 'hidden',
                              border: '1px solid #e0e0e0',
                              flexShrink: 0,
                            }}
                          >
                            <div
                              style={{
                                background: '#939393',
                                height: '100%',
                                paddingLeft: '8px',
                                paddingRight: '8px',
                                display: 'flex',
                                alignItems: 'center',
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: 'Roboto Mono, monospace',
                                  fontWeight: 500,
                                  fontSize: '11px',
                                  lineHeight: '20px',
                                  color: 'white',
                                  letterSpacing: '0.3px',
                                }}
                              >
                                BUG
                              </span>
                            </div>
                            <div
                              style={{
                                background: 'white',
                                paddingLeft: '8px',
                                paddingRight: '8px',
                                display: 'flex',
                                alignItems: 'center',
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: 'Roboto Mono, monospace',
                                  fontWeight: 400,
                                  fontSize: '11px',
                                  lineHeight: '20px',
                                  color: '#262626',
                                }}
                              >
                                {job.errorCode}
                              </span>
                            </div>
                          </div>
                          <span
                            style={{
                              fontFamily: 'Roboto, sans-serif',
                              fontWeight: 400,
                              fontSize: '12px',
                              lineHeight: '20px',
                              color: '#595959',
                            }}
                          >
                            {job.errorMessage}
                          </span>
                        </div>
                      </td>
                    </tr>
                  )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>

          {/* No Results */}
          {filteredJobs.length === 0 && (
            <div
              style={{
                padding: '48px',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: '14px',
                  lineHeight: '22px',
                  color: '#8c8c8c',
                  margin: '0 0 16px',
                }}
              >
                No jobs found matching your filters
              </p>
              <button
                onClick={() => {
                  setSearchKeyword('');
                  setFilterType('model');
                  setTimeFilter('7');
                }}
                style={{
                  paddingLeft: '16px',
                  paddingRight: '16px',
                  paddingTop: '6px',
                  paddingBottom: '6px',
                  background: '#1890ff',
                  color: 'white',
                  borderRadius: '4px',
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
