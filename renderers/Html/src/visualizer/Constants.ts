// TOOD: Can I pull this from the samples folder rather than copying it here?

export const defaultPayload: string = `
{
	"@type": "AdaptiveCard",
	"body": [
		{
			"@type": "Container",
			"speak": "<s>Card created by Miguel Garcia: Publish Adaptive Card schema</s>",
			"items": [
				{
					"@type": "TextBlock",
					"text": "Card created: Publish Adaptive Card schema",
					"weight": "bolder",
					"size": "medium"
				},
				{
					"@type": "ColumnGroup",
					"columns": [
						{
							"@type": "Column",
							"size": "auto",
							"items": [
								{
									"@type": "Image",
									"url": "http://connectorsdemo.azurewebsites.net/images/MSC12_Oscar_002.jpg",
									"size": "small",
									"style": "person"
								}
							]
						},
						{
							"@type": "Column",
							"size": "stretch",
							"items": [
								{
									"@type": "TextBlock",
									"text": "**Miguel Garcia**",
									"wrap": true
								},
								{
									"@type": "TextBlock",
									"text": "Created {{DATE(2017-02-14 06:08:39Z,Long)}} {{TIME(2017-02-14 06:08:39Z,Short)}}",
									"isSubtle": true,
									"wrap": true
								}
							]
						}
					]
				}
			]
		},
		{
			"@type": "Container",
			"items": [
				{
					"@type": "TextBlock",
					"text": "Now that we have define the main rules and features of the format, we need to produce a schema and publish it to GitHub. The schema will be the starting point of our reference documentation.",
					"speak": "",
					"wrap": true
				},
				{
					"@type": "FactGroup",
					"speak": "It has been assigned to: David Claux",
					"facts": [
						{
							"name": "Board:",
							"value": "Adaptive Card"
						},
						{
							"name": "List:",
							"value": "Backlog"
						},
						{
							"name": "Assigned to:",
							"value": "David Claux"
						},
						{
							"name": "Due date:",
							"value": "Not set"
						}
					]
				}
			],
			"actions": [
				{
					"@type": "ShowCardAction",
					"title": "Set due date",
					"card": {
						"@type": "AdaptiveCard",
						"body": [
							{
								"@type": "TextInput",
								"style": "date",
								"id": "dueDate",
								"title": "Select due date"
							}
						],
						"actions": [
							{
								"@type": "HttpAction",
								"method": "POST",
								"title": "OK",
								"url": "http://xyz.com?dueDate={{dueDate}}"
							}
						]
					}
				},
				{
					"@type": "ShowCardAction",
					"title": "Comment",
					"card": {
						"@type": "AdaptiveCard",
						"body": [
							{
								"@type": "TextInput",
								"id": "comment",
								"isMultiline": true,
								"title": "Enter your comment"
							}
						],
						"actions": [
							{
								"@type": "HttpAction",
								"method": "POST",
								"title": "OK",
								"url": "http://xyz.com",
								"headers": {
									"content-type": "application/json"
								},
								"body": "{ 'comment' : '{{comment}}' }"
							}
						]
					}
				},
				{
					"@type": "OpenUrlAction",
					"title": "View",
					"url": "http://foo.com"
				}
			]
		}
	]
}`;