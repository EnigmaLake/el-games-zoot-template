export default function useRequest(
  endpoint,
  body,
  callbackForSuccess,
  callbackForFailure
) {
  const defaultCb = (data) => console.log(`${endpoint} error:`, data);

  const request = fetch(
    `${process.env.NEXT_PUBLIC_EL_ZOOT_GAME_SERVER_URL}/${endpoint}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  )
    .then((response) => response.json())
    .then((data) => callbackForSuccess(data))
    .catch((error) => {
      if (callbackForFailure && typeof callbackForFailure === "function") {
        callbackForFailure(error);
      } else {
        defaultCb(error);
      }
    });

  return { request };
}
