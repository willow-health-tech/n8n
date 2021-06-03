module.exports = {
	de: {
		github: {
			parameters: {
				Authentication: {
					displayName: 'Authentifizierung',
					options: {
						accessToken: {
							displayName: 'Zugangstoken',
						},
					},
				},
				Resource: {
					displayName: 'Ressource',
					description: 'Beschreibung der Ressourcen',
					options: {
						issue: {
							displayName: 'Thema',
							description: 'Beschreibung eines Themas',
						},
						file: {
							displayName: 'Datei',
						},
						repository: {
							displayName: 'Repo',
						},
						release: {
							displayName: 'Veröffentlichung',
						},
						review: {
							displayName: 'Überprüfung',
						},
						user: {
							displayName: 'Benutzer',
						},
					},
				},
				Operation: {
					displayName: 'Aktion',
					options: {
						create: {
							displayName: 'Schaffen',
							description: 'Neue Datei in Repo schaffen.',
						},
						delete: {
							displayName: 'Entfernen',
						},
						get: {
							displayName: 'Anfragen',
						},
					},
				},
				'Repository Owner': {
					displayName: 'Repo Besitzer',
					placeholder: 'Die n8n-io',
				},
				'Repository Name': {
					displayName: 'Repo Name',
					placeholder: 'Das n8n',
				},
				Title: {
					displayName: 'Titel',
				},
				Body: {
					displayName: 'Körper',
				},
				// TODO: Decide if a param like `Label` should be considered
				// a) a hidden top-level param with a header `Labels`, or
				// b) a nested param under the top-level param `Labels`
				Label: {
					displayName: 'Etikett',
					description: 'Beschreibung des Etikettes',
				},
				Assignee: {
					displayName: 'Beauftragte',
					description: 'Beschreibung des Beauftragtens',
				},
				Labels: {
					displayName: 'Etiketten',
					description: 'Beschreibung der Etiketten',
					multipleValueButtonText: 'Etikett hinzufügen',
				},
				Assignees: {
					displayName: 'Beauftragte',
					description: 'Beschreibung der Beauftragten',
					multipleValueButtonText: 'Beautragten hinzufügen',
				},
				'Additional Parameters': {
					displayName: 'Zusätzliche Parameter',
					options: {
						author: {
							displayName: 'Autor',
						},
						branch: {
							displayName: 'Ast',
						},
						committer: {
							displayName: 'Commit-Macher',
						},
					},
				},
			},
		},
	},
};
