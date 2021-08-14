import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "qp7lm0l9",
  dataset: "production",
  useCdn: true,
});