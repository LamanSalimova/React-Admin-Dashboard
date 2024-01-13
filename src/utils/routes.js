import Dashboard from "../scenes/dashboard/Dashboard";
import Team from "../scenes/team/Team";
import Invoices from "../scenes/invoices/Invoices";
import Calendar from "../scenes/calendar/Calendar";
import Contacts from "../scenes/contacts/Contacts";
import Geography from "../scenes/geography/Geography";
import Bar from "../scenes/bar/Bar";
import Form from "../scenes/form/Form";
import Line from "../scenes/line/Line";
import Pie from "../scenes/pie/Pie";
import FAQ from "../scenes/faq/Faq";

export const routes = [
  { path: "/", element: Dashboard },
  { path: "/team", element: Team },
  { path: "/contacts", element: Contacts },
  { path: "/invoices", element: Invoices },
  { path: "/form", element: Form },
  { path: "/bar", element: Bar },
  { path: "/pie", element: Pie },
  { path: "/line", element: Line },
  { path: "/faq", element: FAQ },
  { path: "/calendar", element: Calendar },
  { path: "/geography", element: Geography },
];
