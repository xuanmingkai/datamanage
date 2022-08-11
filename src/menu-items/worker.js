import { IconDatabaseImport } from "@tabler/icons";

const icons = { IconDatabaseImport };

const worker = {
  id: "worker",
  title: "Worker",
  type: "group",
  children: [{
	id: "import",
	title: "Import files",
	type: "item",
	url: "/worker/worker-import",
	icon: icons.IconDatabaseImport,
	breadcrumbs: false,
  },],
};

export default worker;
