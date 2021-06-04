import {
	INodeProperties,
} from 'n8n-workflow';

export const messageOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'message',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
			},
			{
				name: 'Delete',
				value: 'delete',
			},
			{
				name: 'Get',
				value: 'get',
			},
			{
				name: 'Get All',
				value: 'getAll',
			},
			{
				name: 'Update',
				value: 'update',
			},
		],
		default: 'create',
		description: 'Operation to perform',
	},
] as INodeProperties[];

export const messageFields = [
	// ----------------------------------------
	//             message: create
	// ----------------------------------------
	{
		displayName: 'Destination',
		name: 'destination',
		type: 'options',
		options: [
			{
				name: 'Room',
				value: 'room',
			},
			{
				name: 'Person Email',
				value: 'personEmail',
			},
			{
				name: 'Person ID',
				value: 'personId',
			},
		],
		required: true,
		default: 'room',
		displayOptions: {
			show: {
				resource: [
					'message',
				],
				operation: [
					'create',
				],
			},
		},
	},
	{
		displayName: 'Room ID',
		name: 'roomId',
		description: ' The room ID of the message.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'message',
				],
				operation: [
					'create',
				],
				destination: [
					'room',
				],
			},
		},
	},
	{
		displayName: 'Person ID',
		name: 'toPersonId',
		description: ' The person ID of the recipient when sending a private 1:1 message.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'message',
				],
				operation: [
					'create',
				],
				destination: [
					'personId',
				],
			},
		},
	},
	{
		displayName: 'Person Email',
		name: 'toPersonEmail',
		description: ' The email address of the recipient when sending a private 1:1 message.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'message',
				],
				operation: [
					'create',
				],
				destination: [
					'personEmail',
				],
			},
		},
	},
	{
		displayName: 'Is Markdown',
		name: 'markdown',
		description: ' Wether the message uses markdown.',
		type: 'boolean',
		required: true,
		default: false,
		displayOptions: {
			show: {
				resource: [
					'message',
				],
				operation: [
					'create',
				],
			},
		},
	},
	{
		displayName: 'Text',
		name: 'text',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'message',
				],
				operation: [
					'create',
				],
				markdown: [
					false,
				],
			},
		},
		description: ' The message, in plain text.',
	},
	{
		displayName: 'Markdown',
		name: 'markdownText',
		description: ' The message, in Markdown format. The maximum message length is 7439 bytes.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'message',
				],
				operation: [
					'create',
				],
				markdown: [
					true,
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		displayOptions: {
			show: {
				resource: [
					'message',
				],
				operation: [
					'create',
				],
			},
		},
		default: {},
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'File',
				name: 'fileUi',
				placeholder: 'Add File',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {},
				options: [
					{
						name: 'fileValue',
						displayName: 'File',
						values: [
							{
								displayName: 'Binary Data',
								name: 'binaryData',
								type: 'boolean',
								default: false,
								description: 'If the file to upload should be taken from binary field.',
							},
							{
								displayName: 'Binary Property',
								name: 'binaryPropertyName',
								type: 'string',
								default: 'data',
								required: true,
								displayOptions: {
									show: {
										binaryData: [
											true,
										],
									},
								},
								description: '',
							},
							{
								displayName: 'URL',
								name: 'url',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										binaryData: [
											false,
										],
									},
								},
								description: 'The public URL',
							},
						],
					},
				],
			},
		],
	},
	
	// ----------------------------------------
	//             message: delete
	// ----------------------------------------
	{
		displayName: 'Message ID',
		name: 'messageId',
		description: 'ID of the message to delete.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'message',
				],
				operation: [
					'delete',
				],
			},
		},
	},
	
	// // ----------------------------------------
	// //               message: get
	// // ----------------------------------------
	{
		displayName: 'Message ID',
		name: 'messageId',
		description: 'ID of the message to retrieve.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'message',
				],
				operation: [
					'get',
				],
			},
		},
	},
	
	// ----------------------------------------
	//             message: getAll
	// ----------------------------------------
	{
		displayName: 'Room ID',
		name: 'roomId',
		description: ' List messages in a room, by ID.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'message',
				],
				operation: [
					'getAll',
				],
			},
		},
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Return all results.',
		displayOptions: {
			show: {
				resource: [
					'message',
				],
				operation: [
					'getAll',
				],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 50,
		description: 'The number of results to return.',
		typeOptions: {
			minValue: 1,
		},
		displayOptions: {
			show: {
				resource: [
					'message',
				],
				operation: [
					'getAll',
				],
				returnAll: [
					false,
				],
			},
		},
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'message',
				],
				operation: [
					'getAll',
				],
			},
		},
		options: [
			{
				displayName: 'Before',
				name: 'before',
				description: 'List messages sent before a date and time.',
				type: 'dateTime',
				default: '',
			},
			{
				displayName: 'Before Message',
				name: 'beforeMessage',
				description: 'List messages sent before a message, by ID.',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Parent ID',
				name: 'parentId',
				description: 'List messages with a parent, by ID.',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Mentioned People',
				name: 'mentionedPeople',
				description: ' List messages with these people mentioned, by ID. Use me as a shorthand for the current API user. Only me or the person ID of the current user may be specified. Bots must include this parameter to list messages in group rooms (spaces).',
				type: 'string',
				default: '',
			},
		],
	},
	
	// // ----------------------------------------
	// //             message: update
	// // ----------------------------------------
	{
		displayName: 'Message ID',
		name: 'messageId',
		description: 'ID of the message to update.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'message',
				],
				operation: [
					'update',
				],
			},
		},
	},
	{
		displayName: 'Is Markdown',
		name: 'markdown',
		description: ' Wether the message uses markdown.',
		type: 'boolean',
		required: true,
		default: false,
		displayOptions: {
			show: {
				resource: [
					'message',
				],
				operation: [
					'update',
				],
			},
		},
	},
	{
		displayName: 'Text',
		name: 'text',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'message',
				],
				operation: [
					'update',
				],
				markdown: [
					false,
				],
			},
		},
		description: ' The message, in plain text.',
	},
	{
		displayName: 'Markdown',
		name: 'markdownText',
		description: ' The message, in Markdown format. The maximum message length is 7439 bytes.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'message',
				],
				operation: [
					'update',
				],
				markdown: [
					true,
				],
			},
		},
	},
] as INodeProperties[];
