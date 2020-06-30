import React from 'react';

const TabPanel = ({ children, value, index }) => {
	return <div className={value !== index ? 'noDisplay' : 'display'}>{value === index && children}</div>;
};

export default TabPanel;
