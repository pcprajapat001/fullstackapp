import React, { useEffect, useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import axios from "axios";
import ShowEmp from "./ShowEmp";

const AddEmp = () => {
  const [data, setData] = useState([]);
  const [empname, setEmpname] = useState("");
  const [dept, setEmpdept] = useState("");
  const [empid, setEmpempid] = useState("");
  const [city, setEmpcity] = useState("");
  const [pin, setEmppin] = useState("");
  const [phone, setEmpphone] = useState("");

  const getEmp = async () => {
    const emp = await axios.get("http://localhost:7575/");
    setData(emp.data);
  };

  useEffect(() => {
    getEmp();
  }, []);

  const handleAdd = async () => {
    const payload = { empname, dept, empid, city, pin, phone };
    await axios.post("http://localhost:7575/addemp", payload);
    getEmp();
  };

  const handleDelete = async (_id) => {
    const payload = { _id };
    await axios.post("http://localhost:7575/delete", payload);
    getEmp();
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <TextField
          onChange={(e) => setEmpname(e.target.value)}
          fullWidth
          variant="outlined"
          label="Emp Name"
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          onChange={(e) => setEmpdept(e.target.value)}
          fullWidth
          variant="outlined"
          label="Emp dept"
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          onChange={(e) => setEmpempid(e.target.value)}
          fullWidth
          variant="outlined"
          label="Emp empid"
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          onChange={(e) => setEmpcity(e.target.value)}
          fullWidth
          variant="outlined"
          label="Emp city"
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          onChange={(e) => setEmppin(e.target.value)}
          fullWidth
          variant="outlined"
          label="Emp pin"
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          onChange={(e) => setEmpphone(e.target.value)}
          fullWidth
          variant="outlined"
          label="Emp phone"
        />
      </Grid>
      <Grid item xs={12}>
        <Button onClick={handleAdd} variant="contained" fullWidth>
          Add Emp
        </Button>
      </Grid>

      {data.map((item) => {
        return (
          <Grid item xs={3}>
            <ShowEmp item={item} handleDelete={handleDelete} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default AddEmp;
