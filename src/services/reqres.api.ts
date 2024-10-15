export const getAllUsers = async (perPage, page) => {
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

export const getUserById = async (id: string) => {
  try {
    const response = await fetch(
      `https://reqres.in/api/users/${id}`,
    )

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`)
    }

    const responseJson = await response.json();
    return responseJson.data;
  } catch (err) {
    console.error(err instanceof Error ? err.message : 'Nieznany blad');
    return err;
  }
}
