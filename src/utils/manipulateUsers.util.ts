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

function escapeSpecialChars(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export const validateUserData = (
  firstname: string,
  lastname: string,
  avatar: string,
): string[] => {
  const errors: string[] = [];
  const MAX_NAME_LENGTH = 50;
  const MAX_AVATAR_LENGTH = 2048;

  firstname = escapeSpecialChars(firstname);
  lastname = escapeSpecialChars(lastname);
  avatar = escapeSpecialChars(avatar);

  if (!firstname || firstname.length < 2 || firstname.length > MAX_NAME_LENGTH) {
    errors.push(`Imie musi miec od 2 do ${MAX_NAME_LENGTH} znakow.`);
  }

  if (!lastname || lastname.length < 2 || lastname.length > MAX_NAME_LENGTH) {
    errors.push(`Nazwisko musi miec od 2 do ${MAX_NAME_LENGTH} znakow.`);
  }

  const urlPattern = /^(https?:\/\/[^\s]+)$/; // Prosty wzór dla linku URL
  if (!avatar || avatar.length > MAX_AVATAR_LENGTH || !urlPattern.test(avatar)) {
    errors.push(`Link do zdjecia musi byc poprawny i nie moze przekraczac ${MAX_AVATAR_LENGTH} znakow.`);
  }

  return errors;
};
