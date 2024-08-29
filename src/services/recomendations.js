export default async function getRecommendations() {
  const URL = `${process.env.SPOTIFY_BASE_URL_ALL}`;
  const OPTIONS = {
    method: "GET",
    headers: {
      "x-rapidapi-key": `${process.env.SPOTIFY_API_KEY}`,
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(URL, OPTIONS);
    if (!response.ok) {
      throw new Error("Error al obtener datos");
    }
    const data = await response.json();

    const browseData =
      data?.data?.browseStart?.sections?.items[0]?.sectionItems?.items || [];

    const simplifiedData = browseData
      .map((item) => {
        const content = item.content?.data?.data?.cardRepresentation;
        if (!content) return null;

        return {
          title: content.title?.transformedLabel || "",
          imageUrl: content.artwork?.sources?.[0]?.url || "",
          backgroundColor: content.backgroundColor?.hex || "",
          uri: item.uri || "",
        };
      })
      .filter(Boolean);

    return {
      categories: simplifiedData,
      totalCount: simplifiedData.length,
    };
  } catch (error) {
    console.error("Error in getRecommendations:", error);
    return { error: error.message };
  }
}
