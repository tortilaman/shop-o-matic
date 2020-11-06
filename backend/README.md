# Shop-O-Matic Backend

# Databases

Food

- Name: string\*
- uid (generated)
- Products: [array of links]
- Favorite: link

Product

- Name: string\*
- uid (generated)
- Photo: url?
- Brand: link\*
- Food: link\*
- Store(s): [array of links]
  - Aisle: integer (later)
- Category (later)
- Safe: radio
  - Yes
  - No
  - Unknown (default)
  - Call

Brand

- Name: string\*
- uid (generated)
- Website: url
- Products: [array of links]

Store

- Name: string\*
- uid (generated)
- Location: address (later)
- Products: [array of links]

MasterListArray

- items: [array of links to products or foods]
