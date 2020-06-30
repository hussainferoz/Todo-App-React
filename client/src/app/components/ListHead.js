import React from 'react';

import { List, ListItem, ListItemText, Divider } from '@material-ui/core';

const ListHead = () => {
	return (
		<List style={{ width: '100%' }}>
			<ListItem>
				<ListItemText className="list__head__font_weight" primary="Todo Name" />
				<ListItemText className="list__head__font_weight" primary="Todo Level" />
				<ListItemText className="list__head__font_weight" primary="Todo Completed" />
				<ListItemText className="list__head__font_weight" primary="Update Todo" />
				<ListItemText className="list__head__font_weight" primary="Delete Todo" />
			</ListItem>
			<Divider />
		</List>
	);
};

export default ListHead;
