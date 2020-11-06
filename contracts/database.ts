import { Guid } from 'guid-typescript';
import { QueryResult, QueryResultRow } from 'pg';

enum Status {
    backlog = 'Backlog', 
    toDo = 'ToDo', 
    prioritization = 'Prioritization', 
    triage = 'Triage', 
    onHold = 'On Hold', 
    inProgress = 'In Progress', 
    awaitingAcceptance = 'Awaiting Acceptance', 
    done = 'Done'
}

enum Priority {
    critical = 'critical', 
    high = 'high', 
    medium = 'medium', 
    low = 'low'
}

export interface Issue {
    id: Guid,
    issue_title: string,
    issue_text: string,
    created_on: Date,
    updated_on: Date,
    created_by: Guid,
    assigned_to: Guid,
    open: boolean,
    status_text: Status,
    priority: Priority,
}

export interface DbNerveCenter {
    query: (text: string, params: string[]) => Promise<QueryResult<QueryResultRow[]>>
}