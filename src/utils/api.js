import axios from "axios"

// Important part to change before building
const api = "/utils"

export const sendMail = async (data, type) => {
  const result = await axios({
    method: "post",
    url: `${api}/sendMail`,
    data: { data: data, type: type },
  })

  return result.data
}
