import { supabase } from '../config/supabase';

export async function fetchProjects() {
    const { data, error } = await supabase
        .from('projects')
        .select('*');
    
    if (error) throw error;
    return data;
}

// .contains version where project.tags contains every tag that we're querying for
export async function fetchProjectsByAllTags(tags) {
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .contains('tags', tags); 

    if (error) throw error;
    return data;
}

// .overlaps version where it will return projects as long as they have at least one tag in common with the array
export async function fetchProjectsByAnyTags(tags) {
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .overlaps('tags', tags); 

    if (error) throw error;
    return data;
}