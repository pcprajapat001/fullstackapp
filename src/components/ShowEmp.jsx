import { Button, Card, CardContent } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";

const ShowEmp = ({ item, handleDelete }) => {
  return (
    <Card sx={{ bgcolor: "lightblue" }}>
      <CardContent>
        <img src="" alt="" />
        <h3>EmpName: {item.empname}</h3>
        <h3>Emp Dept: {item.dept}</h3>
        <h3>Emp ID: {item.empid}</h3>
        <h3>Emp City: {item.city}</h3>
        <h3>Emp pin: {item.pin}</h3> - {item.phone}
        <Button
          onClick={() => handleDelete(item.id)}
          variant="contained"
          color="error"
          fullWidth
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default ShowEmp;
