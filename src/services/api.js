import { supabase } from '../config/supabase';

export async function fetchProjects() {
    const { data, error } = await supabase
        .from('projects')
        .select('*');
    
    if (error) throw error;
    return data;
}

// get the top x projects with the highest visibility_score
export async function fetchTopProjects(x) {
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('visibility_score', { ascending: false })
        .limit(x);

    if (error) throw error;
    return data;
}

// get all possible categories to filter by
export async function fetchDistinctCategories() {
    const { data, error } = await supabase
        .from('projects')
        .select('category');
    
    if (error) throw error;
    
    // Extract unique categories and remove null/undefined values
    const uniqueCategories = [...new Set((data ?? []).flatMap(p => p.category ?? []))].sort();
    return uniqueCategories.sort(); // Sort alphabetically
}

// Fetch projects filtered by category
export async function fetchProjectsByCategory(category) {
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .overlaps('category', Array.isArray(category) ? category : [category]);
    
    if (error) throw error;
    return data;
}
