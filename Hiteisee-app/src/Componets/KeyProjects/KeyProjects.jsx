import React, { lazy, Suspense, useEffect } from 'react';
import './KeyProjects.css';
import AmaBhoomi from './Projects/AmaBhoomi';

// const Lrp = lazy(() => import('./Projects/Lrp'));
// const CustomErp = lazy(() => import('./Projects/CustomErp'));
// const WorkFlowKiims = lazy(() => import('./Projects/WorkFlowKiims'));
// const DigitalEmpoweringBihar = lazy(() => import('./Projects/DigitalEmpoweringBihar'));
// const PmWani = lazy(() => import('./Projects/PmWani'));
// const AmaBhoomi = lazy(() => import('./Projects/AmaBhoomi'));
// const Wsc = lazy(() => import('./Projects/Wsc'));
// const Isbt = lazy(() => import('./Projects/Isbt'));
// const WasteWater = lazy(() => import('./Projects/WasteWater'));
// const Edulead = lazy(() => import('./Projects/Edulead'));
// const SmartCampus = lazy(() => import('./Projects/SmartCampus'));
// const Robot = lazy(() => import('./Projects/Robot'));
// const SmartAgriculture = lazy(() => import('./Projects/SmartAgriculture'));

export default function KeyProjects() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (

        <div className='key-projects-page'>
            <div className="key-projects-header">
                <div className="key-projects-heading">
                    <h1>Key Projects</h1>
                </div>
            </div>
            {/* <div className="key-projects-container">
                <SmartCampus />
            </div> */}
            <div className="custom-project-container">
                <div className="soul-projects-container">
                    <AmaBhoomi />
                </div>
            </div>
            {/* <div className="key-projects-container">
                <Wsc />
            </div>
            <div className="custom-project-container">
                <div className="soul-projects-container">
                    <Isbt />
                </div>
            </div> */}
            {/* <div className="key-projects-container">
                <PmWani />
            </div>
            <div className="custom-project-container">
                <div className="soul-projects-container">
                    <CustomErp />
                </div>
            </div>
            <div className="key-projects-container">
                <WorkFlowKiims />
            </div>
            <div className="custom-project-container">
                <div className="soul-projects-container">
                    <DigitalEmpoweringBihar />
                </div>
            </div>
            <div className="key-projects-container">
                <WasteWater />
            </div>
            <div className="custom-project-container">
                <div className="soul-projects-container">
                    <Edulead />
                </div>
            </div>
            <div className="key-projects-container">
                <Lrp />
            </div>
            <div className="custom-project-container">
                <div className="soul-projects-container">
                    <Robot />
                </div>
            </div>
            <div className="key-projects-container">
                <SmartAgriculture />
            </div> */}
        </div>

    );
}
