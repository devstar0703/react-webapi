import * as React from "react";

import { Routes , Route } from "react-router-dom";

import { connect } from 'react-redux' ;

import Header from "src/components/Layouts/Header";

const Layout = (props) => {
  

    return (
        <>
            <Header />
            <Routes>
                {/* <Route path="/" element={< Landing />} /> */}
                {/* <Route element={<ProtectedRoute />}>
                    <Route path='/solstice/*' element={<Solstice />} />
                </Route>  */}
                {/* <Route path="/*" element={<NotFound />}/> */}
            </Routes>
        </>
    );
}
const mapStateToProps = state => ({
 
}) ;
const mapDispatchToProps = {

} ;
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
