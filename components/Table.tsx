import React, { CSSProperties } from 'react';
import { Table, TableProps } from '@mantine/core';

interface DataItem {
  [key: string]: React.ReactNode;
}

interface TableComponentProps extends TableProps {
  data: DataItem[];
  headers: { key: string; label: string }[];
  style?: CSSProperties;
}

const TableComponent: React.FC<TableComponentProps> = ({ data, headers, style, ...tableProps }) => {
  return (
    <Table {...tableProps} style={style}>
      <Table.Thead>
        <Table.Tr>
          {headers?.map(({ label }, index) => (
            <Table.Th key={index}>{label}</Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {data?.map((item, index) => (
          <Table.Tr key={index}>
            {headers?.map(({ key }) => (
              <Table.Td key={key}>{item[key]}</Table.Td>
            ))}
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

export default TableComponent;
