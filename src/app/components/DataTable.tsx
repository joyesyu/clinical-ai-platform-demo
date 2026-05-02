import { ReactNode } from 'react';

interface Column<T> {
  header: string;
  accessor: keyof T | ((row: T) => ReactNode);
  className?: string;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  className?: string;
}

export function DataTable<T extends Record<string, any>>({ columns, data, className = '' }: DataTableProps<T>) {
  const getCellValue = (row: T, column: Column<T>) => {
    if (typeof column.accessor === 'function') {
      return column.accessor(row);
    }
    return row[column.accessor];
  };

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            {columns.map((column, index) => (
              <th
                key={index}
                className={`px-4 py-3 text-left text-[12px] font-medium text-[#6F6F6F] uppercase tracking-wide ${column.className || ''}`}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-border last:border-b-0 hover:bg-background/50 transition-colors">
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className={`px-4 py-4 text-[14px] text-[#161616] ${column.className || ''}`}
                >
                  {getCellValue(row, column)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
