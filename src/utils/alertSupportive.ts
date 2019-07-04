export default function() {
  if (document.documentElement.getBoundingClientRect === void 0)
    throw new Error(
      "Warning: browser not getBoundingClientRect, please update the browser"
    );
}
