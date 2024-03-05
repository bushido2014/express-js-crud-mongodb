/**
 * GET /
 * About
 */

exports.about = async (req, res) => {
  const locals = {
    title: "About",
    description: "User Management System",
    imageDetails: [],
  };

  try {
    // URL
    const response = await fetch("https://picsum.photos/v2/list?limit=21");
    const data = await response.json();

    //
    data.forEach((image) => {
      locals.imageDetails.push({
        imageUrl: image.download_url,
        author: image.author,
      });
    });

    //
    res.render("about", locals);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};
