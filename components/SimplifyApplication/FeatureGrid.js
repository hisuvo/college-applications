import {
  MonitorSmartphone,
  ClipboardList,
  Gift,
  Headphones,
  Timer,
  BanknoteIcon,
} from "lucide-react";

const features = [
  {
    title: "Track applications in one place",
    desc: "Apply to and manage all college applications through My Profile",
    icon: <BanknoteIcon />,
  },
  {
    title: "Get Your Career Match",
    desc: "Take our free career compass personality quiz and get top career options for you.",
    icon: <MonitorSmartphone />,
  },
  {
    title: "Apply With One Form",
    desc: "One platform to apply to 2000+ esteemed colleges",
    icon: <ClipboardList />,
  },
  {
    title: "Get Exciting Rewards",
    desc: "Win amazing rewards and cashbacks while applying",
    icon: <Gift />,
  },
  {
    title: "Talk to Admission Experts",
    desc: "Get free personalised expert guidance on colleges & courses",
    icon: <Headphones />,
  },
  {
    title: "Easy Apply in 5 mins",
    desc: "Fill your college applications in 5 minutes or less.",
    icon: <Timer />,
  },
];

export default function FeatureGrid() {
  return (
    <div className="py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-amber-500 text-white/90 rounded-lg p-6 flex justify-between items-start gap-4 shadow hover:shadow-md transition"
          >
            <div>
              <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
              <p className="text-sm ">{feature.desc}</p>
            </div>
            <div className="bg-white text-[#2f9c6f]  p-3 rounded-md shadow-sm">
              {feature.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
