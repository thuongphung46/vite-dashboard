import { DataGrid } from "devextreme-react";
import { Column } from "devextreme-react/cjs/data-grid";
import { useState } from "react";

export const ConversionDataPage = () => {
  const [datasource, setDatasource] = useState<any[]>([
    {
      start_date: "2024-04-01",
      disbursement_date: "2024-04-05",
      date_due: "2024-10-01",
      source: "ABC Bank",
      depository_number: "123456789",
      sub_clause: "Clause A",
      loan_type: "Personal Loan",
      contract_number: "987654321",
      name_customer: "John Doe",
      content: "Loan for house renovation",
      root_generation: "10000",
      origin_of_root_reduction: "0",
      arise: "Interest",
    },
    {
      start_date: "2024-03-15",
      disbursement_date: "2024-03-20",
      date_due: "2024-09-15",
      source: "XYZ Bank",
      depository_number: "987654321",
      sub_clause: "Clause B",
      loan_type: "Car Loan",
      contract_number: "123456789",
      name_customer: "Jane Smith",
      content: "Loan for buying a car",
      root_generation: "20000",
      origin_of_root_reduction: "1000",
      arise: "Principal",
    },
  ]);
  return (
    <div
      style={{
        width: "100%",
      }}>
      <DataGrid
        height={"100vh"}
        width={"100%"}
        columnAutoWidth
        showBorders
        showRowLines
        dataSource={datasource}>
        <Column
          caption="Ngày giao dịch"
          dataField="start_date"
          dataType="string"></Column>
        <Column
          caption="Ngày giải ngân"
          dataField="disbursement_date"
          dataType="string"></Column>
        <Column
          caption="Ngày đáo hạn"
          dataField="date_due"
          dataType="string"></Column>
        <Column caption="Nguồn" dataField="source" dataType="string"></Column>
        <Column
          caption="Số lưu ký"
          dataField="depository_number"
          dataType="string"></Column>
        <Column
          caption="Tiểu khoản"
          dataField="sub_clause"
          dataType="string"></Column>
        <Column
          caption="Loại vay"
          dataField="loan_type"
          dataType="string"></Column>
        <Column
          caption="Số khế ước"
          dataField="contract_number"
          dataType="string"></Column>
        <Column
          caption="Tên khách hàng"
          dataField="name_cutomer"
          dataType="string"></Column>
        <Column
          caption="Nội dung"
          dataField="content"
          dataType="string"></Column>
        <Column
          caption="Phát sinh gốc"
          dataField="root_generation"
          dataType="string"></Column>
        <Column
          caption="Phát sinh giảm gốc"
          dataField="origin_of_root_reduction"
          dataType="string"></Column>
        <Column
          caption="Phát sinh"
          dataField="arise"
          dataType="string"></Column>
      </DataGrid>
    </div>
  );
};
