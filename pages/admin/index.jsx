import React from 'react';
import AdminProtectedRoute from '../../src/components/protected/admin/AdminsProtectedRoute';
import Layout from '../../src/components/layouts/Layout';


const IndexAdminPage = () => {
    return (
        <Layout>
            <AdminProtectedRoute>

            </AdminProtectedRoute>
        </Layout>
    );
}
 
export default IndexAdminPage;