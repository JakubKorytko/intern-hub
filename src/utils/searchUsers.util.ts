import { getAllUsers } from '@/services/reqres.api'

const getAllDataFromApi = async (data = [], iterPage = 1) => {
  const fetchedData = await getAllUsers(100, iterPage)
  const data_temp = data.concat(fetchedData.data)
  if (fetchedData.total_pages - fetchedData.page <= 0) {
    return data_temp
  }
  return getAllDataFromApi(data_temp, iterPage + 1)
}

const searchUsers = (users, searchValue) => {

  const lowerSearchValue = searchValue.toLowerCase()
  const searchTerms = lowerSearchValue.split(' ')

  return users.filter(user => {
    const fullName = `${user.first_name.toLowerCase()} ${user.last_name.toLowerCase()}`
    return searchTerms.every(term => fullName.includes(term))
  })
}

export const simulatePagesOnFilteredData = async (valueToFind="", page = 1, perPage = 5) => {
  try {
    const allUsers = await getAllDataFromApi();
    const filteredUsers = searchUsers(allUsers, valueToFind);

    const total = filteredUsers.length;
    const total_pages = Math.ceil(total / perPage);

    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

    return {
      page,
      per_page: perPage,
      total,
      total_pages,
      data: paginatedUsers,
    };
  } catch (error) {
    console.error(error);
    return {
      page,
      per_page: 0,
      total: 0,
      total_pages: 0,
      data: [],
    };
  }
};
