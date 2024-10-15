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
    console.error(err instanceof Error ? err.message : 'Nieznany blad')
  }
}

export const getUserById = async (id: number) => {
  try {
    const response = await fetch(`https://reqres.in/api/users/${String(id)}`)

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`)
    }

    const responseJson = await response.json()
    return responseJson.data
  } catch (err) {
    console.error(err instanceof Error ? err.message : 'Nieznany blad')
    return err
  }
}

export const deleteUserById = async (id: number) => {
  try {
    const response = await fetch(`https://reqres.in/api/users/${String(id)}`, {
      method: 'DELETE',
    })

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`)
    }

    return response.status === 204
  } catch (err) {
    console.error(err instanceof Error ? err.message : 'Nieznany blad')
    return err
  }
}

export const updateUserById = async (
  id: number,
  firstname: string,
  lastname: string,
  avatar: string,
) => {
  try {
    const response = await fetch(`https://reqres.in/api/users/${String(id)}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstname, lastname, avatar }),
    })

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`)
    }

    return response.status === 200
  } catch (err) {
    console.error(err instanceof Error ? err.message : 'Nieznany blad')
    return err
  }
}

export const createUser = async (
  firstname: string,
  lastname: string,
  avatar: string,
) => {
  try {
    const response = await fetch(`https://reqres.in/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstname, lastname, avatar }),
    })

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`)
    }

    return response.status === 200
  } catch (err) {
    console.error(err instanceof Error ? err.message : 'Nieznany blad')
    return err
  }
}
