export const Copyright = () => {
  return (
    <div className="p-6 text-center text-white bg-teal-900">
      <span>© {new Date().getFullYear()} Copyright: </span>
      <a className="font-semibold" href="https://tailwind-elements.com/">
        Mission KAS
      </a>
    </div>
  );
};
