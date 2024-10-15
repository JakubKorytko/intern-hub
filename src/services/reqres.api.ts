export const fetchApi = async (perPage, page) => {
  try {
    const response = await fetch(
      `https://reqres.in/api/users?per_page=${perPage}&page=${page}`,
    )

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`)
    }

    return await response.json()
  } catch (err) {
    console.error(err instanceof Error ? err.message : 'Nieznany blad');
  }
}
