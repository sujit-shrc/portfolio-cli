import { FaGraduationCap } from 'react-icons/fa';

interface EducationItem {
  degree: string;
  university: string;
  yearOfGraduation: number;
}

const sampleEducationData: EducationItem = {
  degree: 'Master in Computer Application',
  university: 'Kamla Nehru Institute of Technology',
  yearOfGraduation: 2024,
};

const EducationResponse: React.FC = () => (
  <div className="text-white">
    <p className="mb-4">Here is my education background:</p>
    
    <ul className="list-disc pl-6">
      <li className="mb-2 flex items-center">
        <FaGraduationCap className="mr-2 text-emerald-500" />
        <strong>Degree:</strong> {sampleEducationData.degree}
      </li>
      <li className="mb-2 flex items-center">
        <FaGraduationCap className="mr-2 text-emerald-500" />
        <strong>University:</strong> {sampleEducationData.university}
      </li>
      <li className="mb-2 flex items-center">
        <FaGraduationCap className="mr-2 text-emerald-500" />
        <strong>Year of Graduation:</strong> {sampleEducationData.yearOfGraduation}
      </li>
    </ul>
  </div>
);

export default EducationResponse;
