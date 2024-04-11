import DataGrid, { Column } from "devextreme-react/cjs/data-grid";
import { useState } from "react";
import { Colors } from "../../../common/color";

export const HomePage = () => {
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
        height={500}
        width={"100%"}
        columnAutoWidth
        showBorders
        showRowLines
        dataSource={datasource}>
        <Column
          caption="Mã khách hàng"
          dataField="id"
          dataType="string"></Column>
        <Column
          caption="Số tài khoản"
          dataField="disbursement_date"
          dataType="string"></Column>
        <Column
          caption="Họ tên"
          dataField="date_due"
          dataType="string"></Column>
        <Column caption="Nguồn" dataField="source" dataType="string"></Column>
        <Column
          caption="Địa chỉ"
          dataField="depository_number"
          dataType="string"></Column>
        <Column
          caption="Năm sinh"
          dataField="sub_clause"
          dataType="string"></Column>
        <Column
          caption="Số CMND"
          dataField="loan_type"
          dataType="string"></Column>
        <Column
          caption="Loại khách hàng"
          dataField="contract_number"
          dataType="string"></Column>
      </DataGrid>
    </div>
  );
};
