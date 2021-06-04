import {
	ICredentialType,
	NodePropertyTypes,
} from 'n8n-workflow';

export class CiscoWebexOAuth2Api implements ICredentialType {
	name = 'ciscoWebexOAuth2Api';
	extends = [
		'oAuth2Api',
	];
	displayName = 'Cisco Webex OAuth2 API';
	properties = [
		{
			displayName: 'Authorization URL',
			name: 'authUrl',
			type: 'hidden' as NodePropertyTypes,
			default: 'https://webexapis.com/v1/authorize',
			required: true,
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'hidden' as NodePropertyTypes,
			default: 'https://webexapis.com/v1/access_token',
			required: true,
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden' as NodePropertyTypes,
			//spark:kms
			default: 'meeting:recordings_read meeting:admin_preferences_write spark:all meeting:admin_schedule_write meeting:admin_preferences_read meeting:schedules_read meeting:participants_read meeting:admin_participants_read meeting:preferences_write meeting:admin_recordings_read meeting:recordings_write meeting:preferences_read spark-admin:workspace_locations_read meeting:schedules_write spark:kms meeting:controls_write meeting:admin_recordings_write meeting:controls_read spark-admin:workspace_locations_write meeting:participants_write meeting:admin_schedule_read',
		},
		{
			displayName: 'Auth URI Query Parameters',
			name: 'authQueryParameters',
			type: 'hidden' as NodePropertyTypes,
			default: '',
		},
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'hidden' as NodePropertyTypes,
			default: 'body',
		},
		{
			displayName: 'Secret',
			name: 'secret',
			type: 'string' as NodePropertyTypes,
			default: '',
			description: `The secret used to generate payload signature.</br>
			Only used for the Cisco Webex Trigger.</br>
			If empty not validation is done when the webhook is recieved`,
		},
	];
}
