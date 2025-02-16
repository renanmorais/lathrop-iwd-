const configValues = {
  name: "IWD Cerrado 2024",
  eventDate: "2024-04-27T08:00:00",
  eventLinkRegistrationUrl: "https://doity.com.br/iwd-cerrado-2024",
  place: "HUB Goiás - Centro de Excelência em Empreendedorismo Inovador",
  formattedDate: "27 de Abril de 2024, 08h00 - 18h00",
  email: "gdggoiania@gmail.com",
};

const resolveURL = () => {
  let finalUrl = "";
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    finalUrl = process.env.NEXT_PUBLIC_SITE_URL;
  } else if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    finalUrl += `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  }

  return finalUrl;
};

export const server = resolveURL();

export default configValues;
