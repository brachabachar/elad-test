import React from 'react';
import Card from './Card';

const SiteDisplay = ({ sites = [],i }) => {
    return (
        <div>
            {sites.map(site => {
                return (
                    <div className='cards-container'>
                        <Card key={site.id} id={site.id} name={site.name} url={site.url} />
                        {site.subData && <SiteDisplay sites={site.subData} />}
                    </div>
                );
            })}
        </div>

    );
};
export default SiteDisplay;