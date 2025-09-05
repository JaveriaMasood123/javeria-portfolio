import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FileText, Briefcase, GraduationCap } from "lucide-react";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-14 relative bg-background">
      <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-primary/5 to-background -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="section-heading text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          {/* Content Column */}
          <motion.div
            className="lg:col-span-8 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" /> Bio
              </h3>
              <p className="text-muted-foreground">
                I am a passionate developer currently learning Full Stack
                Development and Data Science. I enjoy building responsive,
                user-friendly applications and continuously improving my skills
                in modern web technologies.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Card className="h-full border-primary/10 bg-card/50 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-primary" />{" "}
                      Education
                    </h3>
                    <div className="space-y-2">
                      <p className="font-medium">
                        BS Computer Science (In Progress)
                      </p>
                      <p className="text-sm text-muted-foreground">
                       Federal Urdu University Karachi
                      </p>
                      <p className="text-sm text-muted-foreground">2022 - 2026</p>
                      <p className="font-medium">
                        Full Stack Development 
                      </p>
                      <p className="text-sm text-muted-foreground">
                       Saylani Mass IT Training Program (SMIT)
                      </p>
                      <p className="text-sm text-muted-foreground">2024-2025</p>
                       <p className="font-medium">
                        Data Science (Short Course)
                      </p>
                      <p className="text-sm text-muted-foreground">
                        NED University
                      </p>
                      <p className="text-sm text-muted-foreground">2025</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Card className="h-full border-primary/10 bg-card/50 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" /> Experience
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">
                          Frontend Developer Intern
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Remote Internship (2025)
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">Freelance Designer</p>
                        <p className="text-sm text-muted-foreground">
                          Resume & Canva Designing
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Profile Column */}
          <motion.div
            className="lg:col-span-4 flex flex-col items-center lg:items-start gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div
              className="relative"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Avatar className="w-40 h-40 border-4 border-primary/20">
                <AvatarImage
                  src="/imgs/download.jpg"
                  alt="Javeria Masood"
                  loading="lazy"
                />
                <AvatarFallback>JM</AvatarFallback>
              </Avatar>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center lg:text-left"
            >
              <h3 className="text-2xl font-bold">Javeria Masood</h3>
              <p className="text-muted-foreground">
                Full Stack Developer & Data Science Learner
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              <Badge variant="outline" className="bg-primary/10">
                React
              </Badge>
              <Badge variant="outline" className="bg-primary/10">
                Node.js
              </Badge>
              <Badge variant="outline" className="bg-primary/10">
                Python
              </Badge>
              <Badge variant="outline" className="bg-primary/10">
                MongoDB
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
