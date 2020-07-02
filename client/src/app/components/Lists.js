import React, { Fragment } from 'react';

import { ListItem, ListItemText, Divider, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';

const Lists = ({ head, itemName, click }) => {
	return (
		<Fragment>
			{head ? (
				<ListItem>
					<ListItemText className="list__head__font_weight" primary="Todo Name" />
					<ListItemText className="list__head__font_weight list_end" primary="Delete Todo" />
				</ListItem>
			) : (
				<ListItem>
					<ListItemText primary={itemName} />
					<ListItemSecondaryAction>
						<IconButton onClick={click}>
							<DeleteOutlined />
						</IconButton>
					</ListItemSecondaryAction>
				</ListItem>
			)}
			<Divider />
		</Fragment>
	);
};

export default Lists;
