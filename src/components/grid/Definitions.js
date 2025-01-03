import Definition from './Definition';

function Definitions({ data }) {
  const definitions = data.meanings.flatMap((meaning) =>
    meaning.definitions.map((def) => ({
      partOfSpeech: meaning.partOfSpeech,
      definition: def.definition,
      example: def.example
        ? `"${def.example}"`
        : `I couldn't find an example of '${data.word}' used as a ${meaning.partOfSpeech} for this definition.`,
      isDefaultExample: !def.example,
      priority: def.example ? 1 : 0, // priority given to examples provided by API
    }))
  );
  const sortedDefinitions = definitions.sort((a, b) => b.priority - a.priority);
  const defsToRender = sortedDefinitions.slice(0, 3);

  return (
    <>
      {defsToRender.map((def, index) => (
        <Definition
          key={index}
          definition={def.definition}
          partOfSpeech={def.partOfSpeech}
          example={def.example}
          isDefaultExample={def.isDefaultExample}
        />
      ))}
    </>
  );
}

export default Definitions;
