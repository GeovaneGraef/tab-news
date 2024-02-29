function status(request, response) {
  response.status(200).json({ chave: "API online" });
}

export default status;
