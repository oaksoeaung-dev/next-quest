export function getImageUrl(person: { name: string; imageId: string }) {
  return "https://randomuser.me/api/portraits/men/" + person.imageId + ".jpg";
}
