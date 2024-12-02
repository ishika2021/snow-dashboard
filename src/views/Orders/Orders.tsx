import React, { useContext } from "react";
import Icon from "../../components/Icon";
import Search from "../../components/Search";
import Table from "../../containers/Table";
import rows from "../../data/orderList.json";
import NameBadge from "../../components/NameBadge";
import BulletList from "../../components/BulletList";
import { themeContext } from "../../contexts/themeContext";

const tableProps = {
  checkboxSelection: true,
  hideFooter: false,
  className: "order-table",
};

const Order = () => {
  const { theme } = useContext(themeContext);
  const columns = [
    {
      field: "id",
      headerName: "Order ID",
      flex: 0.3,
    },
    {
      field: "name",
      headerName: "User",
      flex: 0.5,
      renderCell: (params) => (
        <NameBadge
          name={params.row.name}
          avatar={params.row.avatar}
          alt={params.row.alt}
        />
      ),
    },
    {
      field: "project",
      headerName: "Project",
      flex: 0.7,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 0.5,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <div className="date-field">
          <Icon type="CalendarBlank" />
          <span>{params.row.date}</span>
        </div>
      ),
    },
    {
      field: "status",
      headerName: "Status",
      flex: 0.5,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => {
        let color = "";
        const status = params.row.status;
        switch (status) {
          case "In Progress":
            color = "#8A8CD9";
            break;
          case "Complete":
            color = "#4AA785";
            break;
          case "Pending":
            color = "#59A8D4";
            break;
          case "Approved":
            color = "#FFC555";
            break;
          case "Rejected":
            theme == "light" ? (color = "#1C1C1C66") : (color = "#ffffff66");
            break;
        }
        return (
          <BulletList
            label={params.row.status}
            labelColor={color}
            markerColor={color}
          />
        );
      },
    },
  ];
  
  return (
    <section className="order-list-wrapper">
      <h6>Order List</h6>
      <div className="header">
        <Icon type="Add" />
        <Icon type="FunnelSimple" />
        <Icon type="ArrowsDownUp" />
        <Search />
      </div>
      <div className="order-list-table">
        <Table rows={rows} columns={columns} properties={tableProps} />
      </div>
    </section>
  );
  
};

export default Order;
