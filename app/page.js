"use client";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function Component() {
  const [showTable, setShowTable] = useState(false);
  const mudavimler = [
    {
      id: 1,
      image: "/placeholder.svg?height=150&width=150",
      name: "Hamza Bravo",
      rank: 1,
      github: "https://github.com/hamzadag",
      instagram: "https://www.instagram.com/in/hamzadag",
      phone: "https://wa.me/1234567890",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=150&width=150",
      name: "Ali Yorulmaz",
      rank: 2,
      github: "https://github.com/aliyorulmaz",
      instagram: "https://www.instagram.com/in/aliyorulmaz",
      phone: "https://wa.me/1234567891",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=150&width=150",
      name: "Cihat Macit",
      rank: 3,
      github: "https://github.com/cihatmacit",
      instagram: "https://www.instagram.com/in/cihatmacit",
      phone: "https://wa.me/1234567892",
    },
    {
      id: 4,
      image: "/placeholder.svg?height=150&width=150",
      name: "John Doe",
      rank: 4,
      github: "https://github.com/johndoe",
      instagram: "https://www.instagram.com/in/johndoe",
      phone: "https://wa.me/1234567893",
    },
    {
      id: 5,
      image: "/placeholder.svg?height=150&width=150",
      name: "Jane Smith",
      rank: 5,
      github: "https://github.com/janesmith",
      instagram: "https://www.instagram.com/in/janesmith",
      phone: "https://wa.me/1234567894",
    },
    {
      id: 6,
      image: "/placeholder.svg?height=150&width=150",
      name: "Michael Brown",
      rank: 6,
      github: "https://github.com/michaelbrown",
      instagram: "https://www.instagram.com/in/michaelbrown",
      phone: "https://wa.me/1234567895",
    },
    {
      id: 7,
      image: "/placeholder.svg?height=150&width=150",
      name: "Emily Davis",
      rank: 7,
      github: "https://github.com/emilydavis",
      instagram: "https://www.instagram.com/in/emilydavis",
      phone: "https://wa.me/1234567896",
    },
    {
      id: 8,
      image: "/placeholder.svg?height=150&width=150",
      name: "David Wilson",
      rank: 8,
      github: "https://github.com/davidwilson",
      instagram: "https://www.instagram.com/in/davidwilson",
      phone: "https://wa.me/1234567897",
    },
    {
      id: 9,
      image: "/placeholder.svg?height=150&width=150",
      name: "Sarah Johnson",
      rank: 9,
      github: "https://github.com/sarahjohnson",
      instagram: "https://www.instagram.com/in/sarahjohnson",
      phone: "https://wa.me/1234567898",
    },
    {
      id: 10,
      image: "/placeholder.svg?height=150&width=150",
      name: "Chris Lee",
      rank: 10,
      github: "https://github.com/chrislee",
      instagram: "https://www.instagram.com/in/chrislee",
      phone: "https://wa.me/1234567899",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h2 className="text-2xl font-bold text-white">
        1tik.net <span className="text-yellow-400">Müdavimler</span>
      </h2>
      {!showTable ? (
        <div className="flex flex-wrap justify-center gap-4">
          {mudavimler.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center p-4 bg-[#1a1a2e] text-white rounded-lg w-[250px] md:w-[300px] lg:w-[350px] transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={item.image}
                alt={`${item.name}`}
                className="w-full h-[150px] object-cover rounded-lg"
              />
              <div className="flex flex-col items-center justify-between w-full mt-2">
                <span className="text-yellow-500 text-xs font-bold px-2 py-1 rounded-full">
                  #{item.rank}
                </span>
                <div className="flex flex-col items-center space-y-1 mt-2">
                  <p className="text-sm font-semibold">{item.name}</p>
                  <div className="flex items-center space-x-1">
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href={item.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon className="w-4 h-4 text-blue-700" />
                    </a>
                    <a
                      href={item.phone}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <PhoneIcon className="w-4 h-4 text-green-500" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-white">Rank</TableHead>
              <TableHead className="text-white">Name</TableHead>
              <TableHead className="text-white">Github</TableHead>
              <TableHead className="text-white">Instagram</TableHead>
              <TableHead className="text-white">Phone</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mudavimler.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="text-yellow-500 font-bold">
                  #{item.rank}
                </TableCell>
                <TableCell className="text-white">{item.name}</TableCell>
                <TableCell className="text-white">
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.github}
                  </a>
                </TableCell>
                <TableCell className="text-white">
                  <a
                    href={item.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.instagram}
                  </a>
                </TableCell>
                <TableCell className="text-white">
                  <a
                    href={item.phone}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.phone}
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      <Button variant="secondary" onClick={() => setShowTable(!showTable)}>
        {showTable ? "Geri Dön" : "Tümünü Görüntüle"}
      </Button>
    </div>
  );
}

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
