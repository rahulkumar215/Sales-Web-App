import { useState } from "react";
import Button from "../universal/Button";
import AddCompany from "./AddCompany";
import Search from "./Search";
import CompanyTable from "./CompanyTable";
import { v4 as uuidv4 } from "uuid";
import EditCompany from "./EditCompany";
import Overlay from "../universal/Overlay";

const dummyData = [
  {
    id: "asdfa",
    industry: "Manfacturing",
    product: "Ex-200",
    companyName: "Advanced Enterprises",
    contactPersonName: "Rahul",
    desigation: "Developer",
    linkedinUrl: "https://linkedin.com/in/jimenezharold",
    officialEmail: "qjackson@hotmail.com",
    alternateEmail: "michaelklein@gmail.com",
    contactNo: "(090)441-2569",
    whatsappNo: "966.461.1286x015",
    alternateContactNo: "001-477-367-5138",
    additionalContacts: [
      { additionalContactPoint1: "http://www.williams.com/" },
      { additionalContactPoint2: "http://www.mueller-cole.info/" },
    ],
  },
  {
    id: "5b5e2732-cce5-4a3a-a7d0-1e558a1c13a6",
    industry: "Finance",
    product: "Ex-300",
    companyName: "Williams, Griffin and Gibson",
    contactPersonName: "Sonya Combs",
    designation: "Developer",
    linkedinUrl: "https://linkedin.com/in/robertcastillo",
    officialEmail: "rdavis@levine-sweeney.net",
    alternateEmail: "melissa32@hotmail.com",
    contactNo: "304-112-8971",
    whatsappNo: "+1-052-323-2020",
    alternateContactNo: "001-251-299-4833x93576",
    additionalContacts: [
      { additionalContactPoint1: "https://williams.com/" },
      { additionalContactPoint2: "https://wood.com/" },
    ],
  },
  {
    id: "8818a077-eae0-4bcf-ba0b-9f3e416d55e9",
    industry: "Healthcare",
    product: "Ex-300",
    companyName: "Pitts Inc",
    contactPersonName: "Seth Hess",
    designation: "Developer",
    linkedinUrl: "https://linkedin.com/in/ernestguerrero",
    officialEmail: "hevans@gmail.com",
    alternateEmail: "scottholt@gmail.com",
    contactNo: "+1-501-365-5534x6521",
    whatsappNo: "614.096.4086x729",
    alternateContactNo: "(794)212-3925",
    additionalContacts: [
      { additionalContactPoint1: "https://ellison.biz/" },
      { additionalContactPoint2: "https://campbell.org/" },
    ],
  },
  {
    id: "25967859-398e-40c7-ae2b-c0c2c2d2fb43",
    industry: "IT",
    product: "Ex-300",
    companyName: "Kennedy, Anderson and Brown",
    contactPersonName: "Patrick Brown",
    designation: "CEO",
    linkedinUrl: "https://linkedin.com/in/jacqueline00",
    officialEmail: "pmyers@foster.com",
    alternateEmail: "jamiemason@cohen.org",
    contactNo: "131-150-7100x435",
    whatsappNo: "+1-893-314-3644x37145",
    alternateContactNo: "741.532.4678x0468",
    additionalContacts: [
      { additionalContactPoint1: "http://schmidt-kelly.com/" },
      { additionalContactPoint2: "http://johnson.com/" },
    ],
  },
  {
    id: "b01cc63f-7bd4-4a8b-9c3f-220970446441",
    industry: "IT",
    product: "SmartTech",
    companyName: "Mason, Orozco and Smith",
    contactPersonName: "Matthew Gonzales",
    designation: "CEO",
    linkedinUrl: "https://linkedin.com/in/kevin37",
    officialEmail: "wrightjacob@yahoo.com",
    alternateEmail: "mrobinson@martin-key.org",
    contactNo: "+1-942-570-7541x902",
    whatsappNo: "308-323-9319x38060",
    alternateContactNo: "896-561-9844x547",
    additionalContacts: [
      { additionalContactPoint1: "https://bennett.org/" },
      { additionalContactPoint2: "http://day.org/" },
    ],
  },
  {
    id: "c2185425-a630-4a71-ad8b-246bca63d087",
    industry: "Healthcare",
    product: "Ex-200",
    companyName: "Miller Inc",
    contactPersonName: "Paul Grimes",
    designation: "CTO",
    linkedinUrl: "https://linkedin.com/in/conleymelissa",
    officialEmail: "johnsonemily@hotmail.com",
    alternateEmail: "tracy08@porter.org",
    contactNo: "6201330461",
    whatsappNo: "+1-325-948-6230x3387",
    alternateContactNo: "(755)270-9642x91289",
    additionalContacts: [
      { additionalContactPoint1: "http://james-howard.com/" },
      { additionalContactPoint2: "http://www.perez-clark.biz/" },
    ],
  },
  {
    id: "010aa14a-23c0-4116-869d-a5a2ee0449a1",
    industry: "Manufacturing",
    product: "Ex-300",
    companyName: "Morris, Fleming and Gonzalez",
    contactPersonName: "Jennifer Cole",
    designation: "CEO",
    linkedinUrl: "https://linkedin.com/in/vevans",
    officialEmail: "quinngeorge@griffith.com",
    alternateEmail: "tina20@yahoo.com",
    contactNo: "436.195.1584x9569",
    whatsappNo: "001-604-084-2534x466",
    alternateContactNo: "755.587.9722x3359",
    additionalContacts: [
      { additionalContactPoint1: "https://www.sloan.biz/" },
      { additionalContactPoint2: "https://perez-collins.com/" },
    ],
  },
  {
    id: "fd353034-7f13-4b9c-ae27-12e6b1fdd2c1",
    industry: "Retail",
    product: "Ex-300",
    companyName: "Edwards-Brennan",
    contactPersonName: "Charles Brooks",
    designation: "Sales Representative",
    linkedinUrl: "https://linkedin.com/in/winterssandra",
    officialEmail: "jennifermccormick@yahoo.com",
    alternateEmail: "garciapatrick@gmail.com",
    contactNo: "(150)798-6599",
    whatsappNo: "(269)467-4801x70003",
    alternateContactNo: "783.542.5712x4986",
    additionalContacts: [
      { additionalContactPoint1: "http://www.kidd.net/" },
      { additionalContactPoint2: "http://www.ford.com/" },
    ],
  },
  {
    id: "8beb2dc3-5325-415c-a53a-cbd86b5c0ce8",
    industry: "IT",
    product: "Ex-300",
    companyName: "Rose-Anderson",
    contactPersonName: "Jessica Campbell",
    designation: "Sales Representative",
    linkedinUrl: "https://linkedin.com/in/arodriguez",
    officialEmail: "krodriguez@williams.info",
    alternateEmail: "crice@yahoo.com",
    contactNo: "860-256-3447x7891",
    whatsappNo: "5705483074",
    alternateContactNo: "714-889-8283",
    additionalContacts: [
      { additionalContactPoint1: "https://grant.com/" },
      { additionalContactPoint2: "https://king-odom.com/" },
    ],
  },
  {
    id: "ac0340cd-d177-425b-a152-0f1e7be980a4",
    industry: "Retail",
    product: "SmartTech",
    companyName: "Johnson Inc",
    contactPersonName: "Jason Daugherty",
    designation: "Sales Representative",
    linkedinUrl: "https://linkedin.com/in/carolyn64",
    officialEmail: "frank75@hotmail.com",
    alternateEmail: "gwashington@brown.com",
    contactNo: "(150)152-2511x406",
    whatsappNo: "201.289.9475x1633",
    alternateContactNo: "345-841-5893",
    additionalContacts: [
      { additionalContactPoint1: "https://simmons-dunn.com/" },
      { additionalContactPoint2: "http://welch.com/" },
    ],
  },
  {
    id: "7bc7e622-762c-4e8c-9e3b-20c9fadfb8e6",
    industry: "Retail",
    product: "Ex-300",
    companyName: "Chang-Fowler",
    contactPersonName: "George Lopez",
    designation: "CEO",
    linkedinUrl: "https://linkedin.com/in/andrewalexander",
    officialEmail: "amy07@gmail.com",
    alternateEmail: "robertsonmeagan@chambers-jackson.biz",
    contactNo: "+1-929-880-9360x358",
    whatsappNo: "+1-124-479-5928x00761",
    alternateContactNo: "863.826.0241x9054",
    additionalContacts: [
      { additionalContactPoint1: "https://brown-mclaughlin.org/" },
      { additionalContactPoint2: "https://www.woods-terry.com/" },
    ],
  },
  {
    id: "5555d911-8be5-4276-84f4-84faa7a4af72",
    industry: "Manufacturing",
    product: "Ex-500",
    companyName: "Schmitt and Sons",
    contactPersonName: "Jamie Simmons",
    designation: "Manager",
    linkedinUrl: "https://linkedin.com/in/victoria79",
    officialEmail: "michaelcurry@gmail.com",
    alternateEmail: "kristen84@bates.org",
    contactNo: "+1-677-786-1013x13121",
    whatsappNo: "(078)457-5502x215",
    alternateContactNo: "+1-688-707-7028x51280",
    additionalContacts: [
      { additionalContactPoint1: "http://www.wright-gonzalez.biz/" },
      { additionalContactPoint2: "https://macias-williams.info/" },
    ],
  },
  {
    id: "ddc92290-9ef5-4042-99c4-90cb39d75e77",
    industry: "IT",
    product: "Ex-300",
    companyName: "Lambert-Jackson",
    contactPersonName: "Jacob Wagner",
    designation: "Manager",
    linkedinUrl: "https://linkedin.com/in/gomezelizabeth",
    officialEmail: "qparker@gallegos-newton.com",
    alternateEmail: "matthew55@yahoo.com",
    contactNo: "632-802-9704x3135",
    whatsappNo: "(397)986-4401",
    alternateContactNo: "849-949-8540x86350",
    additionalContacts: [
      { additionalContactPoint1: "https://www.grant.info/" },
      { additionalContactPoint2: "https://www.singh.com/" },
    ],
  },
  {
    id: "ad01ae22-b342-4732-8ad3-2ef7058d4a45",
    industry: "Healthcare",
    product: "TechPro",
    companyName: "Hunter, Richardson and Lee",
    contactPersonName: "Maria Lowe",
    designation: "CEO",
    linkedinUrl: "https://linkedin.com/in/jennifer20",
    officialEmail: "ucamacho@ayers.com",
    alternateEmail: "bethany46@hotmail.com",
    contactNo: "+1-603-691-8191",
    whatsappNo: "001-222-160-5289x4205",
    alternateContactNo: "085.567.4897",
    additionalContacts: [
      { additionalContactPoint1: "http://www.conrad.net/" },
      { additionalContactPoint2: "http://wright.net/" },
    ],
  },
  {
    id: "d76de99c-3197-4fbe-a327-feb47d9e7fe5",
    industry: "IT",
    product: "SmartTech",
    companyName: "Clark Ltd",
    contactPersonName: "Maurice Weaver",
    designation: "CTO",
    linkedinUrl: "https://linkedin.com/in/gmoore",
    officialEmail: "michaelthomas@wright.info",
    alternateEmail: "ambersmith@yahoo.com",
    contactNo: "034-669-8517",
    whatsappNo: "(509)623-6591",
    alternateContactNo: "974.501.8328x0667",
    additionalContacts: [
      { additionalContactPoint1: "https://key-carter.biz/" },
      { additionalContactPoint2: "http://www.gonzalez.com/" },
    ],
  },
  {
    id: "e805a168-9376-44c3-9ff7-ec7a4020863e",
    industry: "Finance",
    product: "SmartTech",
    companyName: "Davis-Gray",
    contactPersonName: "Raymond Ruiz",
    designation: "CTO",
    linkedinUrl: "https://linkedin.com/in/daniel46",
    officialEmail: "herickson@yahoo.com",
    alternateEmail: "lamjustin@stafford-zamora.com",
    contactNo: "541.575.0427",
    whatsappNo: "+1-099-060-2741x20104",
    alternateContactNo: "5656336671",
    additionalContacts: [
      { additionalContactPoint1: "https://andersen-cruz.net/" },
      { additionalContactPoint2: "https://douglas.com/" },
    ],
  },
  {
    id: "c88e1691-afed-46b1-9976-8225b7c2128c",
    industry: "IT",
    product: "SmartTech",
    companyName: "Walker-Hart",
    contactPersonName: "Bradley Peterson",
    designation: "CTO",
    linkedinUrl: "https://linkedin.com/in/kristina93",
    officialEmail: "kevinrussell@yahoo.com",
    alternateEmail: "rjennings@yahoo.com",
    contactNo: "983.136.5281x24519",
    whatsappNo: "001-435-262-7988x00099",
    alternateContactNo: "083-960-8673x80062",
    additionalContacts: [
      { additionalContactPoint1: "https://www.harvey-stone.net/" },
      { additionalContactPoint2: "https://www.butler.com/" },
    ],
  },
  {
    id: "c2207d59-8240-4db3-98d4-7a1c7085ee12",
    industry: "Retail",
    product: "SmartTech",
    companyName: "Lindsey-Todd",
    contactPersonName: "Jessica Simon",
    designation: "Sales Representative",
    linkedinUrl: "https://linkedin.com/in/lopezjames",
    officialEmail: "angela98@evans-harris.com",
    alternateEmail: "justinschultz@huffman.com",
    contactNo: "+1-979-277-6198x120",
    whatsappNo: "+1-896-020-5029x0471",
    alternateContactNo: "2497591418",
    additionalContacts: [
      { additionalContactPoint1: "http://jensen-moore.com/" },
      { additionalContactPoint2: "https://www.davis.org/" },
    ],
  },
  {
    id: "50ac5857-c725-427a-b3ff-d68c1b4b4744",
    industry: "Retail",
    product: "Ex-200",
    companyName: "Hernandez-Baldwin",
    contactPersonName: "Kimberly Barker",
    designation: "Developer",
    linkedinUrl: "https://linkedin.com/in/guerrerocindy",
    officialEmail: "jillianrowe@kim.com",
    alternateEmail: "ksanchez@yahoo.com",
    contactNo: "001-431-407-8937",
    whatsappNo: "(299)908-0444x61625",
    alternateContactNo: "843.724.7420x2418",
    additionalContacts: [
      { additionalContactPoint1: "http://www.edwards-black.com/" },
      { additionalContactPoint2: "http://knapp.com/" },
    ],
  },
  {
    id: "496b7640-a0a3-4a88-9efa-2e500768e3f2",
    industry: "IT",
    product: "Ex-200",
    companyName: "Scott, Garcia and Duke",
    contactPersonName: "Aaron Rivera",
    designation: "Sales Representative",
    linkedinUrl: "https://linkedin.com/in/cynthiavaldez",
    officialEmail: "wilsonkathryn@gmail.com",
    alternateEmail: "courtney78@gmail.com",
    contactNo: "(853)593-1715x261",
    whatsappNo: "(712)967-8165",
    alternateContactNo: "001-537-609-0458",
    additionalContacts: [
      { additionalContactPoint1: "https://murillo-sharp.com/" },
      { additionalContactPoint2: "http://hutchinson-stephens.info/" },
    ],
  },
  {
    id: "443f03af-3302-48b1-b432-abd8066b9fea",
    industry: "Manufacturing",
    product: "TechPro",
    companyName: "Campbell and Sons",
    contactPersonName: "Jessica Allen",
    designation: "Developer",
    linkedinUrl: "https://linkedin.com/in/megan98",
    officialEmail: "jefferybeard@bonilla.info",
    alternateEmail: "crosbytracy@clark-mcgee.com",
    contactNo: "(855)760-5494x00085",
    whatsappNo: "399.799.8454x839",
    alternateContactNo: "7424151139",
    additionalContacts: [
      { additionalContactPoint1: "https://www.thompson-smith.com/" },
      { additionalContactPoint2: "http://barber-davila.biz/" },
    ],
  },
  {
    id: "09df8699-8a76-425e-8ff5-f07ea6c841b9",
    industry: "Finance",
    product: "Ex-300",
    companyName: "Gill, Brown and James",
    contactPersonName: "Amber Montes DDS",
    designation: "Sales Representative",
    linkedinUrl: "https://linkedin.com/in/sarahammond",
    officialEmail: "traviscampbell@yahoo.com",
    alternateEmail: "jamesbrown@gmail.com",
    contactNo: "(399)158-6666x7255",
    whatsappNo: "222.050.5350x352",
    alternateContactNo: "004.883.2918x5239",
    additionalContacts: [
      { additionalContactPoint1: "https://www.hurley.com/" },
      { additionalContactPoint2: "https://www.quinn-kelly.net/" },
    ],
  },
  {
    id: "fe314cfb-4e70-47a5-b911-d03e2d3da74c",
    industry: "Finance",
    product: "Ex-500",
    companyName: "Kennedy LLC",
    contactPersonName: "Timothy Fowler",
    designation: "Developer",
    linkedinUrl: "https://linkedin.com/in/jennifer10",
    officialEmail: "catherine90@gmail.com",
    alternateEmail: "hendersonsarah@clark-smith.com",
    contactNo: "702-752-1391x52438",
    whatsappNo: "001-731-331-9556",
    alternateContactNo: "(953)479-3288",
    additionalContacts: [
      { additionalContactPoint1: "https://www.phillips-mcgee.com/" },
      { additionalContactPoint2: "http://www.west.net/" },
    ],
  },
  {
    id: "40b27d00-a05d-4b10-9a5a-05f71c0f9aa8",
    industry: "Healthcare",
    product: "SmartTech",
    companyName: "Bell, Moore and Lewis",
    contactPersonName: "Lisa Marshall",
    designation: "CEO",
    linkedinUrl: "https://linkedin.com/in/lopeztaylor",
    officialEmail: "zle@gmail.com",
    alternateEmail: "leekaren@livingston-ward.com",
    contactNo: "+1-159-845-1336x6576",
    whatsappNo: "(347)730-5624",
    alternateContactNo: "581.911.1021x2407",
    additionalContacts: [
      { additionalContactPoint1: "https://ramirez.com/" },
      { additionalContactPoint2: "http://www.rice-boone.info/" },
    ],
  },
  {
    id: "953a4adf-dbc8-4978-a27b-f1faf347dff7",
    industry: "Retail",
    product: "Ex-200",
    companyName: "Baker-Stanley",
    contactPersonName: "Victoria Franco",
    designation: "CEO",
    linkedinUrl: "https://linkedin.com/in/dfernandez",
    officialEmail: "karlaowens@hurley.info",
    alternateEmail: "carterdavid@hotmail.com",
    contactNo: "001-149-282-6390x87335",
    whatsappNo: "+1-286-762-2343",
    alternateContactNo: "(273)617-5103x05782",
    additionalContacts: [
      { additionalContactPoint1: "http://norton.com/" },
      { additionalContactPoint2: "https://www.long-gould.com/" },
    ],
  },
  {
    id: "802562da-9b11-4539-a75e-420500c8471d",
    industry: "Healthcare",
    product: "SmartTech",
    companyName: "Huff LLC",
    contactPersonName: "Janice Atkinson",
    designation: "Manager",
    linkedinUrl: "https://linkedin.com/in/samuel85",
    officialEmail: "david05@garcia-kirk.com",
    alternateEmail: "gmurray@harris-lee.com",
    contactNo: "8571850754",
    whatsappNo: "524.193.5240x91663",
    alternateContactNo: "690-118-0087",
    additionalContacts: [
      { additionalContactPoint1: "http://www.nguyen-williams.com/" },
      { additionalContactPoint2: "http://www.koch.com/" },
    ],
  },
  {
    id: "a187c859-cf01-44ca-9840-cf1c8f5890f7",
    industry: "Finance",
    product: "TechPro",
    companyName: "Barber Inc",
    contactPersonName: "Brian Fitzgerald",
    designation: "Sales Representative",
    linkedinUrl: "https://linkedin.com/in/gsmith",
    officialEmail: "smithrichard@gilmore-watson.com",
    alternateEmail: "leah34@gmail.com",
    contactNo: "904-431-0729x526",
    whatsappNo: "+1-180-377-2787x353",
    alternateContactNo: "6834007300",
    additionalContacts: [
      { additionalContactPoint1: "https://wright.org/" },
      { additionalContactPoint2: "https://baker-mahoney.info/" },
    ],
  },
  {
    id: "783af045-5a7d-451c-b915-6dcf0d1f773a",
    industry: "Manufacturing",
    product: "TechPro",
    companyName: "Chaney-Walker",
    contactPersonName: "Margaret Ortiz",
    designation: "Developer",
    linkedinUrl: "https://linkedin.com/in/berrydaniel",
    officialEmail: "matthewjohnson@adkins.com",
    alternateEmail: "kennethpennington@gmail.com",
    contactNo: "(536)268-4068",
    whatsappNo: "001-484-193-7478x575",
    alternateContactNo: "295.724.7342",
    additionalContacts: [
      { additionalContactPoint1: "http://www.collins-harris.org/" },
      { additionalContactPoint2: "http://ramsey.net/" },
    ],
  },
  {
    id: "487de6c1-2541-42d1-981c-32d5812d93e4",
    industry: "Retail",
    product: "Ex-200",
    companyName: "Lewis, Sanders and Fischer",
    contactPersonName: "Christopher Harris",
    designation: "CEO",
    linkedinUrl: "https://linkedin.com/in/cbrown",
    officialEmail: "michaelbrown@foster.com",
    alternateEmail: "bmorgan@hotmail.com",
    contactNo: "(616)111-3298x5476",
    whatsappNo: "(696)598-3344x774",
    alternateContactNo: "615.709.1703x1393",
    additionalContacts: [
      { additionalContactPoint1: "https://www.smith.com/" },
      { additionalContactPoint2: "https://www.palmer-nguyen.com/" },
    ],
  },
  {
    id: "1a2e6c1d-28f1-4d38-ac2b-d550155097cb",
    industry: "Finance",
    product: "Ex-200",
    companyName: "Middleton-Estes",
    contactPersonName: "Todd Aguirre",
    designation: "Sales Representative",
    linkedinUrl: "https://linkedin.com/in/janethernandez",
    officialEmail: "codykoch@hotmail.com",
    alternateEmail: "carpenterandrew@hotmail.com",
    contactNo: "866.301.4799x467",
    whatsappNo: "+1-043-861-5509x03281",
    alternateContactNo: "001-899-907-9642",
    additionalContacts: [
      { additionalContactPoint1: "https://hughes.biz/" },
      { additionalContactPoint2: "https://www.young-allen.com/" },
    ],
  },
  {
    id: "0ca4128f-268e-42d4-ac86-24f09cd89d71",
    industry: "Retail",
    product: "TechPro",
    companyName: "Andersen, Douglas and Stokes",
    contactPersonName: "Danielle Tran",
    designation: "Sales Representative",
    linkedinUrl: "https://linkedin.com/in/hmack",
    officialEmail: "jose67@hotmail.com",
    alternateEmail: "marie60@rodriguez.biz",
    contactNo: "2057752076",
    whatsappNo: "(429)359-8700x645",
    alternateContactNo: "+1-919-451-1610x28403",
    additionalContacts: [
      { additionalContactPoint1: "https://www.evans-flynn.com/" },
      { additionalContactPoint2: "https://www.jones-tyler.biz/" },
    ],
  },
  {
    id: "5f313894-3818-47df-9815-41907d0c0872",
    industry: "IT",
    product: "TechPro",
    companyName: "White, Butler and Barajas",
    contactPersonName: "Heather Haynes",
    designation: "Sales Representative",
    linkedinUrl: "https://linkedin.com/in/carneydustin",
    officialEmail: "victoria56@brown.info",
    alternateEmail: "markbradley@campbell.com",
    contactNo: "001-526-682-2774",
    whatsappNo: "001-846-348-4650x40033",
    alternateContactNo: "557.041.4522x65985",
    additionalContacts: [
      { additionalContactPoint1: "http://gordon.com/" },
      { additionalContactPoint2: "http://www.bennett.biz/" },
    ],
  },
];

function Company() {
  const [showModal, setShowModal] = useState(false);
  const [companies, setCompanies] = useState(dummyData);
  const [searchQuery, setSearchQuery] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [editObj, setEditObj] = useState();

  // Derived state. These are the companies that will actually be displayed
  const searchedCompanies =
    searchQuery.length > 0
      ? companies.filter((comp) =>
          Object.values(comp)
            .flatMap((value) =>
              Array.isArray(value)
                ? value.flatMap((item) => Object.values(item))
                : value,
            )
            .join(" ")
            .toLowerCase()
            .includes(searchQuery.toLowerCase()),
        )
      : companies;

  function handleAddCompanies(data) {
    console.log(data);
    const newData = {
      id: uuidv4(),
      ...data,
    };
    console.log(newData);
    setCompanies((prev) => [...prev, newData]);
  }

  const handleDelComp = (id) => {
    setCompanies((prev) => prev.filter((comp) => comp.id !== id));
  };

  const handleShowEditCompModel = (company) => {
    setShowEditModal(true);
    setEditObj(company);
    console.log(company);
  };

  const handleEditComp = (id, data) => {
    setCompanies((prev) =>
      prev.map((company) => (company.id === id ? { id, ...data } : company)),
    );
  };

  return (
    <div className="row-start-1 row-end-3 grid grid-cols-2 grid-rows-[max-content_max-content_1fr] items-center p-8">
      <Button
        className="col-start-1 col-end-3"
        onClick={() => setShowModal(true)}
      >
        Add Company
      </Button>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CompanyTable
        companies={searchedCompanies}
        onDelComp={handleDelComp}
        handleShowEditCompModel={handleShowEditCompModel}
      />

      {showModal && (
        <>
          <Overlay onClick={() => setShowModal(false)} />
          <AddCompany
            closeModel={() => setShowModal(false)}
            onAddCompany={handleAddCompanies}
          />
        </>
      )}

      {showEditModal && (
        <>
          <Overlay onClick={() => setShowEditModal(false)} />
          <EditCompany
            data={editObj}
            onEdit={handleEditComp}
            onClick={() => setShowEditModal(false)}
          />
        </>
      )}
    </div>
  );
}

export default Company;
