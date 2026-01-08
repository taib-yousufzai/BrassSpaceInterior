interface SchemaInjectorProps {
  schema: object | object[];
}

export default function SchemaInjector({ schema }: SchemaInjectorProps) {
  const schemaArray = Array.isArray(schema) ? schema : [schema];
  
  return (
    <>
      {schemaArray.map((s, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}
