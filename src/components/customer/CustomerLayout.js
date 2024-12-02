import React from 'react';
import CustomerTopNav from './CustomerTopNav';
import CustomerFooter from './CustomerFooter';
import { Outlet } from 'react-router-dom';

export default function CustomerLayout() {
    return (
        <div>
            <CustomerTopNav />
            <Outlet />
            <CustomerFooter />
        </div>
    );
}