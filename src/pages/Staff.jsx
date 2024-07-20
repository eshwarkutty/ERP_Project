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
    return data.staff;
};

const StaffPage = () => {
    const [staff, setStaff] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const staffData = await fetchData();
            setStaff(staffData);
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
                accessorKey: 'collegeName',
                header: 'Collage Name',
            },
            {
                accessorKey: 'email',
                header: 'Email',
            },
            {
                accessorKey: 'position',
                header: 'Position',
            },
            {
                accessorKey: 'department',
                header: 'Department',
            },
        ],
        [],
    );

    const table = useMantineReactTable({
        columns,
        data: staff,
    });

    return (
        <div>
            <h2> Staffs List</h2>
            <MantineReactTable table={table} />
        </div>
    );
};

export default StaffPage;
