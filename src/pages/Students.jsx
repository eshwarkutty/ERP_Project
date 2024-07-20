import React, { useEffect, useState, useMemo } from 'react';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import 'mantine-react-table/styles.css';
import {
  MantineReactTable,
  useMantineReactTable,
} from 'mantine-react-table';


const fetchData = async () => {
  const response = await fetch('/datas.json');
  const data = await response.json();
  return data.students;
};

const StudentsPage = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const studentData = await fetchData();
      setStudents(studentData);
    };

    getData();
  }, []);


  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
      },
      {
        accessorKey: 'firstName',
        header: 'First Name',
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'email',
        header: 'Email',
      },
      {
        accessorKey: 'enrollmentDate',
        header: 'Enrollment Date',
      },
      {
        accessorKey: 'major',
        header: 'Major',
      },
    ],
    [],
  );

  const table = useMantineReactTable({
    columns,
    data: students,
  });

  return (
    <div>
      <h2> Students List</h2>
      <MantineReactTable table={table} />
    </div>
  );
};

export default Student;
