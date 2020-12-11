import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import FolderIcon from '@material-ui/icons/Folder';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupIcon from '@material-ui/icons/Group';
import PersonIcon from '@material-ui/icons/Person';
import HelpIcon from '@material-ui/icons/Help';
import React from "react";
import Profile from "../pages/Profile";
import Team from "../pages/Team";
import Project1 from "../pages/Project1";
import Project2 from "../pages/Project2";
import Settings from "../pages/Settings";
import Help from "../pages/Help";



export const burgerBarData = [
    {
        id: 0,
        name: "Профиль",
        icon: <PersonIcon />,
        content: <Profile/>,
    },
    {
        id: 1,
        name: "Команда",
        icon: <GroupIcon />,
        content:  <Team/>,
    },
    {
        id: 2,
        name: "Публикации",
        icon: <FolderIcon />,
        content: <Profile/>,
    },
    {
        id: 3,
        name: "Настройки",
        icon: <SettingsIcon />,
        content: <Settings/>,
    },
    {
        id: 4,
        name: "Помощь",
        icon: <HelpIcon />,
        content: <Help/>,
    },
];


export const HelpAccordions = [
    {
        id: 0,
        question: "Как изменить информацию профиля?",
        answer: "Зайдите в Настройки и выберите раздел Аккаунт. В нем вы можете изменить личную информацию," +
            " фотографию профиля, изменить ответы на тестовые вопросы.",
    },
    {
        id: 1,
        question: "Как создать команду?",
        answer: "Если вы еще не вступили в команду, выберите Создать команду. Опишите ваше исследование," +
            " внимательно ответьте на вопросы о качествах кандидатов." +
            " Если вы уже вступили в команду, создать новую можно по ссылке в конце страницы Команда.",
    },
    {
        id: 2,
        question: "Как вступить команду?",
        answer: "Если вы еще не вступили в команду, выберите Создать команду. Опишите ваше исследование," +
            " внимательно ответьте на вопросы о качествах кандидатов." +
            " Если вы уже вступили в команду, создать новую можно по ссылке в конце страницы Команда.",
    },
    {
        id: 3,
        question: "Как создать проект?",
        answer: "Если вы еще не вступили в команду, выберите Создать команду. Опишите ваше исследование," +
            " внимательно ответьте на вопросы о качествах кандидатов." +
            " Если вы уже вступили в команду, создать новую можно по ссылке в конце страницы Команда.",
    },
    {
        id: 4,
        question: "Как изменить описание или параметры проекта?",
        answer: "Если вы еще не вступили в команду, выберите Создать команду. Опишите ваше исследование," +
            " внимательно ответьте на вопросы о качествах кандидатов." +
            " Если вы уже вступили в команду, создать новую можно по ссылке в конце страницы Команда.",
    },
    {
        id: 5,
        question: "Как удалить или добавить конкретного участника команды?",
        answer: "Если вы еще не вступили в команду, выберите Создать команду. Опишите ваше исследование," +
            " внимательно ответьте на вопросы о качествах кандидатов." +
            " Если вы уже вступили в команду, создать новую можно по ссылке в конце страницы Команда.",
    },
    {
        id: 6,
        question: "Почему я не вижу своей команды?",
        answer: "Если вы еще не вступили в команду, выберите Создать команду. Опишите ваше исследование," +
            " внимательно ответьте на вопросы о качествах кандидатов." +
            " Если вы уже вступили в команду, создать новую можно по ссылке в конце страницы Команда.",
    },
];