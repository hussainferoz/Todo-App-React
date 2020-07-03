import React, { Fragment } from 'react';

import { ListItem, ListItemText, Divider, ListItemIcon, IconButton, Tooltip } from '@material-ui/core';
import { DeleteOutlined, CheckOutlined } from '@material-ui/icons';

const Lists = ({ head, itemName, completed, clickDelete, clickComplete }) => {
	return (
		<Fragment>
			{head ? (
				<ListItem>
					<ListItemText className="list__head__font_weight" primary="Todo Name" />
					<ListItemText className="list__head__font_weight list_end" primary="Todo Actions" />
				</ListItem>
			) : (
				<ListItem>
					<ListItemText primary={itemName} className={completed && 'list__complete'} />
					{completed ? null : (
						<ListItemIcon>
							<Tooltip title="Mark Complete">
								<IconButton onClick={clickComplete}>
									<CheckOutlined />
								</IconButton>
							</Tooltip>
						</ListItemIcon>
					)}

					<ListItemIcon>
						<Tooltip title="Delete Todo">
							<IconButton onClick={clickDelete}>
								<DeleteOutlined />
							</IconButton>
						</Tooltip>
					</ListItemIcon>
				</ListItem>
			)}
			<Divider />
		</Fragment>
	);
};

export default Lists;
