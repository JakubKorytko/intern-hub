import { deleteUserById } from '@/services/reqres.api'

export const deleteUser = async (id: number) => {
  const confirmed = confirm("Czy na pewno chcesz usunac uzytkownika? Operacja ta jest nieodwracalna");
  if (!confirmed) return false;

  const result = await deleteUserById(id);
  if (!result) {
    alert("Operacja nieudana");
    return false;
  }
  alert("Uzytkownik usuniety!");
  return true;
}
