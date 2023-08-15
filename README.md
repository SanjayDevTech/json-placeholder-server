# json-placeholder-server

## Features
- Own database
- Highly customizable

## Data preparation
- Plan your data
- Specify your rule in db-rules.js
- Place the data in db.js

## Configuration
- Edit `config.js` for fallback port and flag to show status code in response.
- Edit `db-rules.js` for rules.
- Edit `db.js` for your data.
- Run `test.js` to verify your data with rules.

## Data I have added
- Three collections
  - Posts
  - Foods
  - Users
- Each document in a collection has a document id. It can be mentioned in `db-rules.js`.
  - Posts (id)
  - Foods (id)
  - Users (user_id)

## API
- {domain}/
  - Will list all data
- {domain}/{collection_name}/
  - List all data inside a collection
- {domain}/{collection_name}/{document_id}
  - List the matched document with document id
 
